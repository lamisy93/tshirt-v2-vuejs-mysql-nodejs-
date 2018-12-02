/*jshint esversion :  6 */

// Fichier de connexion à la database

const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tshirts"
});

connection.connect();

const end = function end() {
  connection.end(); // on termine la connection à la BDD
};

// delete products + update products

const deleteProducts = function deleteProducts(clbk, id) {
let sql = "DELETE FROM product WHERE id = ?";
connection.query(sql, [id], function (err, res, fields) {
  if (err) throw err;
  console.log("tshirt delete", res);
  return clbk(res);
});
};

const updateProducts = function updateProducts(clbk, payload) {
    let sql = "UPDATE product SET name = ?, price = ?, id_brand = ? WHERE id = ?";
    var data =  [payload.name, payload.price, payload.id_brand, payload.id];
    console.log(payload);
    connection.query(sql, data, function (err, res, fields) {
      if (err) throw err;
      console.log("produit modifié", res);
      return clbk(res);
    });
    };

module.exports = {deleteProducts,
updateProducts,
end};

