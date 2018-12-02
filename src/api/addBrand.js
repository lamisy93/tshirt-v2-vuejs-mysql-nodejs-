/* jshint esversion : 6 */

// @root/api/addBrand.js

function addBrand(req, res, connection) {
  const addBrandModel = require("../database/addBrand")(connection);
  addBrandModel.post((err, dataset) => {
    if (err) {
      console.error("err in addBrand", err);
    }
    res.send(dataset);
  }, req.body); // post datas ici ...
}

module.exports = addBrand;
