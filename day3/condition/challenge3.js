const prompt = require('prompt-sync')();
let a = Number(prompt('Donner le premier nombre : '));
let b = Number(prompt('Donner le deuxième nombre : '));
let somme = a + b;
if (a === b) {
    somme = somme * 3;
}
console.log('Résultat : ' + somme);