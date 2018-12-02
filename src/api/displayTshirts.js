/* jshint esversion : 6 */

// @root/api/displayTshirts.js

function displayTshirts(req, res, connection) {
  const displayTshirtsModel = require("../database/displayTshirts")(
    connection
  );
  displayTshirtsModel.get((err, dataset) => {
    if (err) {
      console.error("err in displayTshirts", err);
    }
    res.send(dataset);
  }, req.body); // post datas ici ...
}

module.exports = displayTshirts;
