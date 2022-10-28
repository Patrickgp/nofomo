const { AuthenticationError } = require("apollo-server-express");
const {
  User,
  Listing,
  Review,
  Product,
  Category,
  Order,
} = require("../models");
const { signToken } = require("../utils/auth");

module.exports = {
  Query: {
    listings: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Listing.find(params).sort({ createdAt: -1 });
    },

    listing: async (parent, { _id }) => {
      return Listing.findOne({ _id });
    },

    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },

    users: async () => {
      return User.find().select("-__v -password");
    },

    // May cause issues with the resolver directly below to pull users orders. May need to remove.
    user: async (parent, { username }) => {
      return User.findOne({ username }).select("-__v -password");
    },

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.product",
          populate: "category",
        });
      }
    },

    categories: async () => {
      return await Category.find();
    },

    products: async (parent, { category, name }) => {
      const params = {};
      if (category) {
        params.category = category;
      }
      if (name) {
        params.name = {
          $regex: name,
        };
      }
      return await Product.find(params).populate("category");
    },

    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate("category");
    },

    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "category",
        });
        return user.orders.id(_id);
      }
      throw new AuthenticationError("Not logged in");
    },
  },
  Mutation: {
    addListing: async (parent, args, context) => {
      if (context.user) {
        const listing = await Listing.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { listings: listing._id } },
          { new: true }
        );

        return listing;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },

    addReview: async (parent, { listingId, reviewBody }, context) => {
      if (context.user) {
        const updatedListing = await Listing.findOneAndUpdate(
          { _id: listingId },
          {
            $push: {
              reviews: { reviewBody, username: context.user.username },
            },
          },
          { new: true, runValidators: true }
        );

        return updatedListing;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    addOrder: async (parent, { products }, context) => {
      if (context.user) {
        const order = new Order({ products });
        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });
        return order;
      }
      throw new AuthenticationError("Not logged in");
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }
      throw new AuthenticationError("Not logged in");
    },

    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;
      return await Product.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },
  },
};
