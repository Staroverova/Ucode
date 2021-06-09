'use strict'

module.exports.Product = class {
    name;
    kcal;
    constructor(name, kcal) {
        this.name = name;
        this.kcal = kcal;
    }

}


/*
  Task name: Try, catch
*/
/* file test.js */

// const {Product} = require("./product");
// const {Ingestion} = require("./ingestion");
// const productNames = [
//     'Nutella',
//     'Chicken',
//     'Coca-Cola',
//     'Biscuit',
//     'Brocolli',
//     'Tomatoes',
//     'Apple',
//     'Potato',
//     'Pizza',
//     'Beer'
// ];
//
// const randomInt = (min, max) => {
//     return min + Math.floor((max - min) * Math.random());
// }
//
// const stock = new Ingestion('breakfast', 1);
//
// productNames.forEach(name => {
//     stock.setProduct(new Product(name, randomInt(40, 500)))
// })
//
// productNames.forEach(productName => {
//     console.log(`***\nGetting ${productName} that has`,
//         `${stock.getProductInfo(productName).kcal} calories.`)
//     try {
//         stock.getFromFridge(productName);
//         console.log(`You're doing great, ${productName} is good!`)
//     } catch (error) {
//         console.log(`Caught exception: ${error.message}!`,
//             `Throw ${productName} away!`)
//     }
// })