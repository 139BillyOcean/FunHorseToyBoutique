const express = require('express');
const app = express();
const port = 3000;
const controller = require('./controller.js');
const path = require('path');

app.use(express.static('./client/dist'));
app.use('/product/:productId', express.static('./client/dist'));
app.use('/signin/', express.static('./client/dist'));
app.use('/listproduct/', express.static('./client/dist'));
app.use('/viewcart/', express.static('./client/dist'));
app.use('/accountoverview/', express.static('./client/dist'));
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.get('/home', controller.getAllProducts);
app.get('/home/search/:searchTerm', controller.getSearchResults);
app.get('/overview/:objectId', controller.getSingleProduct);
app.get('/overview/user/:userId', controller.getSingleUser);
app.get('/home/search', controller.getSearchResults);
app.get('/users', controller.getCurrentUser);

app.post('/createListing', controller.createListing);
app.post('/users', controller.addNewUser);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
