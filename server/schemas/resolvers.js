const Listing = require('../models/Listing');

module.exports = {
    Query: {
        async listing(_, {ID}) {
            return await Listing.findById(ID)
        },
        async getListings(_, {amount}) {
            return await Listing.find().sort({ createdAt: -1}).limit(amount)
        },
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
      
              return userData;
            }
      
            throw new AuthenticationError('Not logged in');
          },
          users: async () => {
            return User.find()
              .select('-__v -password')
          },
          user: async (parent, { username }) => {
            return User.findOne({ username })
              .select('-__v -password')
          },
    },
    Mutation: {
        async createListing(_,{listingInput: {name, description, price}}) {
            const createdListing = new Listing({
                name: name,
                description: description,
                price: price,
                createdAt: new Date().toISOString()
            });

            const res = await createdListing.save();

            return {
                id: res.id,
                ...res._doc
            }
        },
        async deleteListing(_, {ID}) {
            const wasDeleted = (await Listing.deleteOne({_id: ID})).deletedCount;
            return wasDeleted;
        },
        async editListing(_, {ID, listingInput: {name, description, price}}){
            const wasEdited = (await Listing.updateOne({ _id: ID }, {name: name, description: description, price: price})).modifiedCount;
            return wasEdited;
        },
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
          },
        login: async (parent, { email, password }) => {
          const user = await User.findOne({ email });
    
          if (!user) {
            throw new AuthenticationError('Incorrect credentials');
          }
    
          const correctPw = await user.isCorrectPassword(password);
    
          if (!correctPw) {
            throw new AuthenticationError('Incorrect credentials');
          }
    
          const token = signToken(user);
          return { token, user };
        },

    }
}