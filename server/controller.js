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
  },

  createListing: (req, res) => {
    console.log(req)
    model.createListing(req.body)
      .then((data)=> {
        console.log(data)
        res.status(200).send(data)
      })
      .catch((err)=>{
        res.status(404).send(err)
      })
  }
}