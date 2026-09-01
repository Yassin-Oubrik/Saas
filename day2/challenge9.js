const prompt = require('prompt-sync')();
let a1 = Number(prompt('Donner la valeur de point a1'));
let b1 = Number(prompt('Donner la valeur de point b1'));
let c1 = Number(prompt('Donner la valeur de point c1'));
let a2 = Number(prompt('Donner la valeur de point a2'));
let b2 = Number(prompt('Donner la valeur de point b2'));
let c2 = Number(prompt('Donner la valeur de point c2'));
let distance = ((a2-a1)**2 + (b2-b1)**2 + (c2-c1)**2)**(1/2);
console.log(`La distance entre les deux points est ${distance}`);