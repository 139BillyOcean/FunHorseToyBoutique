const {Toy, User} = require('../database/index.js');

module.exports = {
  getAllProducts: () => {
    return Toy.find({}).exec()
  },

  getSearchResults: (searchTerm) => {
    return Toy.find({
      name: { $regex: '.*' + searchTerm + '.*' }
    }).limit(10).exec()
  }
}
