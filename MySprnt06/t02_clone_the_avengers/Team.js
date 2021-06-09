'use strict'

module.exports.Team = class {
    id;
    avengers;

    constructor(id, array) {
        this.id = id;
        this.avengers = array;
    }

    clone() {
        return Object.assign(Object.create(this), JSON.parse(JSON.stringify(this)));
    }
    battle(damage) {
        this.avengers = this.avengers.filter(item => {
            item.damage(damage.damage);
            if(item.hp > 0) {
                return item;
            }
        });
    }
    calculateLosses(clonedTeam) {
        let count = clonedTeam.avengers.length - this.avengers.length ;
        if(!count) {
            console.log("We haven't lost anyone in this battle!");
        } else {
            console.log(`In this battle we lost ${count} Avengers`);
        }
    }
    calc(av) {

    }
}

/*
  Task name: Clone the Avengers
*/
/* file test.js */

// const {Team} = require('./Team');
// const {Avenger} = require('./Avenger');
// const array = []
//
// array[0] = new Avenger('Tony Stark', 'Iron Man', 'man', 38,
//     ['intelligence', 'durability', 'magnetism'], 120)
// array[1] = new Avenger('Natasha Romanoff', 'Black Widow', 'woman', 35,
//     ['agility', 'martial arts'], 75)
// array[2] = new Avenger('Carol Danvers', 'Captain Marvel', 'woman', 27,
//     ['durability', 'flight', 'interstellar travel'], 95)
//
// const team = new Team(1, array);
//
// console.count('Battle');
// const clonedTeam = team.clone();
// team.battle({damage: 25});
// team.calculateLosses(clonedTeam);
//
// console.count('Battle');
// const afterFirstBattleClone = team.clone();
// team.battle({damage: 80});
// team.calculateLosses(afterFirstBattleClone);