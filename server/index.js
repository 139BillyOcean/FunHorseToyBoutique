const express = require('express');
const app = express();
const port = 3000;
const controller = require('./controller.js')

app.use(express.static('./client/dist'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/home', controller.getAllProducts);
app.get('/home/search/:searchTerm', controller.getSearchResults);
app.get('/users', controller.getCurrentUser);
app.post('/createListing', controller.createListing);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
