const prompt = require('prompt-sync')();
let a = Number(prompt('Donner la première valeur : '));
let b = Number(prompt('Donner la deuxième valeur : '));
if (a === b) {
    console.log('Les deux valeurs sont strictement égales');
} else if (a > b) {
    console.log('La première valeur est supérieure à la deuxième');
} else {
    console.log('La deuxième valeur est supérieure à la première');
}