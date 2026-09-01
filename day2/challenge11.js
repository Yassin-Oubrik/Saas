const prompt = require('prompt-sync')();
let lg = Number(prompt('Donner la longueur'));
let lr = Number(prompt('Donner la largeur'));
let surface = lg * lr;
console.log(`La surface du rectangle est ${surface}`);