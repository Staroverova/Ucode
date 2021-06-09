'use strict'


module.exports = {
    Avenger: class Avenger {

       constructor(name, alias, gender, age, powers, hp) {
           this.name = name;
           this.alias = alias;
           this.gender = gender;
           this.age = age;
           this.powers = powers;
           this.hp = hp;
       }
       damage(damage) {
           this.hp -= damage;
       }
    }
}