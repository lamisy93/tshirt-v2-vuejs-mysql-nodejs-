/* jshint esversion : 6 */

// @root/api/index.js

// Fichier qui contient les require de nos fonctions ainsi que les routes de l'api

var express = require("express");

// import de mes fonctions 

addBrand = require("./addBrand.js");
addProduct = require("./addProduct.js");
displayTshirts = require("./displayTshirts.js");

console.log("coucou je suis le fichier des routes !!!!");

var router = express.Router();

const database = require(__dirname + "/../database")({
  password: "@mysql",
  database: "tshirts"
});

// add brand + add products + get products 

router.post("/addBrand", (req, res) => {
  console.log("Corps de la requête !", req.body);
  addBrand(req, res, database.connection);
});

router.post("/admin/products/add", (req, res) => {
  console.log("Corps de la requête !", req.body);
  addProduct(req, res, database.connection);
});

router.get("/displayTshirts", (req, res) => {
  displayTshirts(req, res, database.connection);
  console.log("Corps de la requête !", req.body);
});


module.exports = router;
