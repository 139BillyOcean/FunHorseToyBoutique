const {Toy, User} = require('../database/index.js');

module.exports = {
  getAllProducts: () => {
    return Toy.find({}).exec()
  },

  getSearchResults: (searchTerm, filterData) => {
    console.log("searchTerm:", searchTerm)
    var conditionArray = filterData.conditionFilter;
    var price = filterData.maxPrice;

    var query = {}
    if (searchTerm && searchTerm.length > 0) {
      query.name = { $regex: `.*${searchTerm}.*`, $options: 'i' }
    }
    if (conditionArray && conditionArray.length > 0 ) {
      query.condition = { $in: conditionArray }
    }
    if (price) {
      query['price.original'] = {$lte: price}
    }
    // var conditionFilter = conditionArray.length !== 0 ? { $in: conditionArray } : {$exists: true}
    return Toy.find(query).limit(10).exec()
  },

  getCurrentUser: (user) => {
    return User.find({
      name: { $regex: `.*${user}.*`, $options: 'i' }
    }).limit(1).exec()
  },
  createListing: (toy)=> {
    return Toy.create(toy)
    // var newListing = new Toy(toy)
    // return newListing.save()
  }
}
