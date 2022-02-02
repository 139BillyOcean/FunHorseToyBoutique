const {Toy, User} = require('../database/index.js');

module.exports = {
  getAllProducts: () => {
    return Toy.find({}).exec();
  },

  getSingleProduct: (objectId) => {
    return Toy.findById({ "_id": objectId + '' }).exec()
  },

  getSingleUser: (userId) => {
    return User.findById({ "_id": userId + '' }).exec();
  },

  getSearchResults: (searchTerm, filterData) => {
    var conditionArray = filterData.conditionFilter;
    var price = filterData.maxPrice;
    var brandArray = filterData.brands;
    var tagsArray = filterData.tags;
    var sortOption = filterData.sortOption;

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
    if (brandArray && brandArray.length > 0) {
      query.brand =  { $in: brandArray }
    }
    if (tagsArray && tagsArray.length > 0) {
      query.tags = { $in: tagsArray }
    }
    if (sortOption) {
        var sortObject = {};
        if (sortOption === 'desc'){
          sortObject['price.original'] = -1
        } else if (sortOption === 'asc') {
          sortObject['price.original'] = 1
        }


        return Toy.find(query).sort(sortObject)
    }

    return Toy.find(query).exec();
  },

  getCurrentUser: (user) => {
    return User.find({
      username: { $regex: `.*${user}.*`, $options: 'i' }
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
    return User.findOneAndUpdate({_id: data.user}, {$push: {listings: toyId}}, { new: true});
  },
  // {listings: data._id}
  addUser: (user) => {
    return User.create(user);
  }
};
