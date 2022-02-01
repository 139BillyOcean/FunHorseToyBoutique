const {Toy, User} = require('../database/index.js');

module.exports = {
  getAllProducts: () => {
    return Toy.find({}).exec()
  },

  getSearchResults: (searchTerm) => {
    console.log("searchTerm:", searchTerm)
    return Toy.find({
      name: { $regex: `.*${searchTerm}.*`, $options: 'i' }
    }).limit(10).exec()
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
