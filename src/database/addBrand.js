/*jshint esversion :  6 */

// @root/database/addBrand.js

const addBrandModel = function addBrandModel(connection) {
    const post = function addBrand(clbk, data) {
      console.log(data);
      const q =
        "INSERT INTO brand (name) VALUES (?)";
      const payload = [data.value];
  
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
  
  module.exports = addBrandModel;
  