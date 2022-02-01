const {Toy, User} = require('../database/index.js');

module.exports = {
  getAllProducts: () => {
    return Toy.find({}).exec();
  },

  getSingleProduct: (objectId) => {
    return Toy.findById({ "_id": objectId + '' }).exec()
  },

  getSingleUser: (userId) => {
    console.log(userId);
    return User.findById({ "_id": userId + '' }).exec();
  },

  getSearchResults: (searchTerm, filterData) => {
    console.log('searchTerm:', searchTerm);
    var conditionArray = filterData.conditionFilter;
    var price = filterData.maxPrice;

    var query = {};
    if (searchTerm && searchTerm.length > 0) {
      query.name = { $regex: `.*${searchTerm}.*`, $options: 'i' };
    }
    if (conditionArray && conditionArray.length > 0 ) {
      query.condition = { $in: conditionArray };
    }
    if (price) {
      query['price.original'] = {$lte: price};
    }
    // var conditionFilter = conditionArray.length !== 0 ? { $in: conditionArray } : {$exists: true}
    return Toy.find(query).limit(10).exec();
  },

  getCurrentUser: (user) => {
    return User.find({
      name: { $regex: `.*${user}.*`, $options: 'i' }
    }).limit(1).exec();
  },
  createListing: (user, toy)=> {
    toy.user = user;
    return Toy.create(toy);
    // var newListing = new Toy(toy)
    // return newListing.save()
  },
  addListingToUser: (data) =>{
    //iwth userid, add listing id to user document
    // data.user
    var toyId = data._id;
    return User.findOneAndUpdate({_id: data.user}, {$push: {listings: toyId}});
  },
  // {listings: data._id}
  addUser: (user) => {
    return User.create(user);
  }
};
