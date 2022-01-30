const express = require('express');
const app = express();
const port = 3000;
const controller = require('./controller.js')

app.use(express.static('./client/dist'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/home', controller.getAllProducts);
app.post('/home', (req, res) => {
  console.log("request: ", req)
}


//controller.addAProduct
);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
