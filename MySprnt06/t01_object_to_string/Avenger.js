// 'use strict'

function avenger(option){
    let Avenger = (av = option) => ([
        `${av.alias.toUpperCase()}`,
        `${av.powers.join('\n')}`
    ]).join('\n')
    Avenger.toString = () => [
        `name: ${option.name}`,
        `gender: ${option.gender}`,
        `age: ${option.age}`
    ].join('\n');
    return Avenger
}
module.exports.Avenger = avenger



/*
  Task name: Object to string
*/
/* file test.js*/
//
// const {Avenger} = require("./Avenger");
//
// const stark = new Avenger({
//     name: 'Tony Stark',
//     alias: 'Iron Man',
//     gender: 'man',
//     age: 38,
//     powers: ["intelligence", "durability", "magnetism"]
// })
//
// const natasha = new Avenger({
//     name: 'Natasha Romanoff',
//     alias: 'Black Widow',
//     gender: 'woman',
//     age: 35,
//     powers: ["agility", "martial arts"]
// })
//
// const examine = (avenger) => {
//     console.count('Avenger');
//     console.group('*** Avenger introduced ***');
//     console.log(avenger.toString());
//     console.groupEnd();
//     console.group('*** Avenger called ***');
//     console.log(avenger());
//     console.groupEnd();
//     console.group('*** Avenger\'s internals ***');
//     console.log(avenger, '\n');
//     console.groupEnd();
// }
//
// examine(stark);
//
// examine(natasha);
//