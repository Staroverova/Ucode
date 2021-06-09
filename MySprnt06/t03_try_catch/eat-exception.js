'use strict'

module.exports.EatException = (product) => {
    if(product.kcal > 200) {
    throw new Error(`Too many calories in ${product.name} for ${this.type}`);
}
}