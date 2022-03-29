const products = [];

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    products.push(this);
  }

  // static because we can directly call this on a function not on any instantiated object
  static fetchAll() {
    return products;
  }
}