const {Toy, User} = require('../database/index.js');

module.exports = {
  getAllProducts: () => {
    return Toy.find({}).exec()
  },
//add toys via postman
// addAProduct: (data) => {
//   console.log("Data: ", data);
//   var Toy = new Toy({
//     user: data.user,
//     name: data.name,
//     condition: data.condition,
//     brand: data.brand,
//     yearManufactured: data.yearManufactured,
//     tags: data.tags,
//     photos: data.photos,
//     price: data.price,
//     quantity: data.quantity,
//     description: data.description,
//     ratings: data.ratings,
//   })

// return Toy.save();
// }
}
