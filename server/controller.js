const model = require('./model.js');

module.exports = {
  getAllProducts: (req, res) => {
    model.getAllProducts()
    .then((data) => {
      res.status(200).send(data)
    })
    .catch(err => res.status(404).send(err))
  },

  getSingleProduct: (req, res) => {
    model.getSingleProduct(req.params.objectId)
      .then((data) => {
        console.log(data);
        res.status(200).send(data);
      })
      .catch(err => res.status(404).send(err));
  },

  getSearchResults: (req, res) => {
    model.getSearchResults(req.params.searchTerm)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(err => res.status(404).send(err))
  },

  getCurrentUser: (req, res) => {
    model.getCurrentUser(req.params.user)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(404).send(err);
    })
  }
}