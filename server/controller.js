const model = require('./model.js');

module.exports = {
  getAllProducts: (req, res) => {
    model.getAllProducts()
    .then((data) => {
      res.status(200).send(data)
    })
    .catch(err => res.status(404).send(err))
  },

  addAProduct: (req, res) => {
    console.log("req: ", req)
    model.addAProduct(req.body)
    .then((data) => {
      res.status(201).send('added to db')
    })
    .catch(err => res.status(500).send(err))
  }

}