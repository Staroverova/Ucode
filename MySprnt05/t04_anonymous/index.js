exports.getAnonymous = (name, alias, affiliation) => {
    return{
        name: name,
        alias: alias,
        affiliation: affiliation
    }
}

//------TEST------//

const i = require('./index');

const mandarin = i.getAnonymous('Unknown', 'Mandarin', 'Ten Rings');

console.log([
   mandarin.name,
   mandarin.alias,
   mandarin.affiliation,
].join('\n'));