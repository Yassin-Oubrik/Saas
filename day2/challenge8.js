prompt= require('prompt-sync')();
let a = Number(prompt('donner la valeur de a '));
let b = Number(prompt('donner la valeur de b'));
let c = Number(prompt('donner la valeur de c'));
let moyenG = (a*b*c)**(1/3);
console.log(`la moyenne geometrique est ${moyenG}`);