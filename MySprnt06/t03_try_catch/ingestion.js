'use strict'

const {EatException} = require("./eat-exception");

module.exports.Ingestion = class {
    id;
    meal_type =['breakfast', 'lunch', 'dinner'];
    day_of_diet;
    products = [];

    constructor(type, day) {
        this.type = type;
        this.day_of_diet = day;
    }
    setProduct(product) {
        this.products.push(product);
    }
    getProductInfo(productName) {
        let result;
        this.products.forEach(item => {
            if(item.name == productName) {
                result = item;
            }
        });
        return result;
    }
    getFromFridge(productName) {
        let product = this.getProductInfo(productName);
        EatException(product);
        // if(product.kcal > 200) {
        //     throw new Error(`Too many calories in ${product.name} for ${this.type}`);
        // }
    }
}