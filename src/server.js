const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const tshirtsRouter = require("./api/index.js");
// console.log("tshirtsRouter", tshirtsRouter);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const database = require("./database/database.js");

app.use("/api/tshirts", tshirtsRouter);
app.use(express.static(__dirname + "/src"));
// const frontEndURL = "http://localhost:8080";


// delete products + update products

app.delete('/api/tshirts/displayTshirts', (req, res) => {
  console.log("T-Shirt supprimé ! ");
  console.log(req.body.idproduit);
  database.deleteProducts(function(data) {
    res.send(data);
  }, req.body.idproduit);
});

app.patch('/api/admin/products/edit', (req, res) => {
  console.log("T-Shirt modifié ! ");
  console.log(req.body.data.objet);
  database.updateProducts(function(data) {
    res.send(data);
  }, req.body.data.objet);
});



app.listen(5000);