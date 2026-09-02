const prompt = require('prompt-sync')();

let a = Number(prompt('Donner le premier nombre :'));
let b = Number(prompt('Donner le deuxième nombre  '));

console.log('Somme : ' + (a + b));
console.log('Différence : ' + (a - b));
console.log('Produit : ' + (a * b));
console.log('Quotient : ' + (a / b));