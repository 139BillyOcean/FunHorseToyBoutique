const model = require('./model.js');

module.exports = {
  getAllProducts: (req, res) => {
    model.getAllProducts()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch(err => res.status(404).send(err));
  },

  getSingleProduct: (req, res) => {
    model.getSingleProduct(req.params.objectId)
      .then((data) => {
        res.status(200).send(data);
      })
      .catch(err => res.status(404).send(err));
  },

  getSingleUser: (req, res) => {
    model.getSingleUser(req.params.userId)
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

  createListing: (req, res) => {
    // console.log(req.query.user)
    model.createListing(req.query.user, req.body)
      .then((data)=> {
        model.addListingToUser(data)
          .then((data)=>{
            console.log('here');
            console.log(data);

          });
        // console.log(data)
        res.status(200).send(data);
      })
      .catch((err)=>{
        res.status(404).send(err);
        console.log(err);
      });
  },

  addNewUser: (req, res) => {
    let newUser = {
      username: req.body.username,
      email: req.body.email,
      name: req.body.firstName + ' ' + req.body.lastName,
      address: {
        street: req.body.street,
        street2: req.body.street2 || null,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode
      }
    };
    model.addUser(newUser)
      .then(() => {
        res.sendStatus(201);
      })
      .catch(err => {
        res.status(404).send(err);
      });
  },

  createUser: (req, res) => {
    let newUser = {
      _id: req.body._id,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      name: req.body.name,
      address: {
        street: req.body.address.street,
        // street2: req.body.newUser.street2 || null,
        city: req.body.address.city,
        state: req.body.address.state,
        zipcode: req.body.address.zipcode
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

