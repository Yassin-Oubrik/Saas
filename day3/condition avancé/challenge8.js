const prompt = require('prompt-sync')();

let age = Number(prompt('Age : '));
let hist = Number(prompt('Historique medical '));
let couv = Number(prompt('Typ de covertur:'));
if (age < 30) {
    console.log('Plan de base');
} else if (age >= 30 && hist == 0) {
    console.log('Plan de base');
} else if (age >= 30 && hist >= 1) {
    console.log('Plan etendu');
}
if (hist == 2) {
    console.log('Couvertur suplementire');
}