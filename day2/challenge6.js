const prompt = require("prompt-sync")();
let a = parseFloat(prompt("Donner la valeur de a : "));
let b = parseFloat(prompt("Donner la valeur de b : "));
let add = a + b;
let sub = a - b;
let mult = a * b;
let div = a / b;
console.log(`la somme de nombre ${a} et ${b} est ${add} ,soustraction : ${sub} , multiplication : ${mult}, division: ${div} `);
 