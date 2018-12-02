/*jshint esversion :  6 */

// @root/database/addProduct.js

const addProductModel = function addProductModel(connection) {
  const post = function addProduct(clbk, data) {
    const q =
      "INSERT INTO product (name, price, url_img, id_brand) VALUES (?, ?, ?, ?)";
    const payload = [data.name, data.price, data.url_img, data.id_brand];

    connection.query(q, payload, (err, res, cols) => {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (err) return clbk(err, null);
      return clbk(null, res);
    });
  };

  return {
    post
  };
};

module.exports = addProductModel;
