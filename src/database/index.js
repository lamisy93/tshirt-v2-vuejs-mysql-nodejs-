/*jshint esversion :  6 */

// Fichier de connexion à la database

const database = function database(config) {
  const mysql = require("mysql");

  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tshirts"
  });

  const connect = function connect() {
    connection.connect(function(err, res) {
      if (err) return console.error(err);
      else console.log("db connected");
      // le serveur node est connecté au serveur mysql (BDD)
    });
  };

  const end = function end() {
    connection.end(); // on termine la connection à la BDD
  };

  const test = function test() {
    // fonction de test pour vérifier la bonne connection
    const sql = "SELECT 1 + 1 AS solution";
    connection.query(sql, function(error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results[0].solution);
    });
  };

  connect();

  return {
    connection,
    end,
    test
  };
};

module.exports = database;
