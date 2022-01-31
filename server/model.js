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

    console.log("query:", query);
    // return Toy.find({ 'price.original': { '$lte': 199 } }).limit(10).exec()
    return Toy.find(query).limit(10).exec()
  }
}
