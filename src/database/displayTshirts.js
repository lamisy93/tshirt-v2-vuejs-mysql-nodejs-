/*jshint esversion :  6 */

// @root/database/displayTshirts.js

const displayTshirtsModel = function displayTshirtsModel(connection) {
  const get = function displayTshirts(clbk, id) {
    var sql;

    sql =
      "SELECT product.id, product.name, product.price, product.url_img, brand.name as brand FROM product INNER JOIN brand ON brand.id = product.id_brand";

    connection.query(sql, [id], (error, results, fields) => {
      // console.log(this.sql); // affiche la dernière requête SQL, pratique pour deboguer
      if (error) return clbk(error, null);
      return clbk(null, results);
    });
  };

  return {
    get
  };
};

module.exports = displayTshirtsModel;
