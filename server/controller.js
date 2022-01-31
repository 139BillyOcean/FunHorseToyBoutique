const model = require('./model.js');

module.exports = {
  getAllProducts: (req, res) => {
    model.getAllProducts()
    .then((data) => {
      res.status(200).send(data)
    })
    .catch(err => res.status(404).send(err))
  },

 getSearchResults: (req, res) => {
   console.log("request", req.query)
    model.getSearchResults(req.params.searchTerm, req.query)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(err => res.status(404).send(err))
  }
}

