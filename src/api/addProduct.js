/* jshint esversion : 6 */

// @root/api/addBrand.js

function addProduct(req, res, connection) {
  const addProductModel = require("../database/addProduct")(connection);
  addProductModel.post((err, dataset) => {
    if (err) {
      console.error("err in addProduct", err);
    }
    res.send(dataset);
  }, req.body); // post datas ici ...
}

module.exports = addProduct;
