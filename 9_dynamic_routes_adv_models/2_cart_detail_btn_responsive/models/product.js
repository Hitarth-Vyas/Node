const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename), 
  'data',
  'products.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      return cb([]);
    } else {
      cb(JSON.parse(fileContent)); //  parses (break something down into its parts, particularly for study of the individual parts) a JSON string, constructing the JavaScript value or object described by the string
    }
  })
}

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.random().toString();  
    getProductsFromFile(products => {
      products.push(this);    // to use this here use arrow func for func inside readFile
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err);
      })
    });
  }

  // static because we can directly call this on a function not on any instantiated object
  static fetchAll(cd) {
    getProductsFromFile(cd);
  }

  static findById(id, cb) {
    getProductsFromFile(products => {
      const product = products.find(p => p.id === id);
      cb(product);
    })
  }
}