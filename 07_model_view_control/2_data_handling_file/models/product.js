const fs = require('fs');
const path = require('path');

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(
      path.dirname(process.mainModule.filename), 
      'data',
      'products.json'
    );
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);    // to use this here use arrow func for func inside readFile
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      })
    })
  }

  // static because we can directly call this on a function not on any instantiated object
  static fetchAll(cb) {
    const p = path.join(
      path.dirname(process.mainModule.filename), 
      'data',
      'products.json'
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        cb([]);
      }
      cb(JSON.parse(fileContent)); //  parses (break something down into its parts, particularly for study of the individual parts) a JSON string, constructing the JavaScript value or object described by the string
    })
  }
}