const model = require('./model.js');

module.exports = {
  getAllProducts: (req, res) => {
    model.getAllProducts()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch(err => res.status(404).send(err));
  },

  getSearchResults: (req, res) => {
    model.getSearchResults(req.params.searchTerm, req.query)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch(err => res.status(404).send(err));
  },

  getCurrentUser: (req, res) => {
    model.getCurrentUser(req.params.user)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },

  addNewUser: (req, res) => {
    let newUser = {
      username: req.body.newUser.username,
      password: req.body.newUser.password,
      email: req.body.newUser.email,
      name: req.body.newUser.firstName + ' ' + req.body.newUser.lastName,
      address: {
        street: req.body.newUser.street,
        street2: req.body.newUser.street2 || null,
        city: req.body.newUser.city,
        state: req.body.newUser.state,
        zipcode: req.body.newUser.zipcode
      }
    };
    model.addUser(newUser)
      .then(() => {
        res.sendStatus(201);
      })
      .catch(err => {
        res.status(404).send(err);
      });
  }
};

