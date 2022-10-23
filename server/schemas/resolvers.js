const Listing = require('../models/Listing');

module.exports = {
    Query: {
        async listing(_, {ID}) {
            return await Listing.findById(ID)
        },
        async getListings(_, {amount}) {
            return await Listing.find().sort({ createdAt: -1}).limit(amount)
        }
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
        }

    }
}