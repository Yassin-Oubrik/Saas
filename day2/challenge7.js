prompt = require('prompt-sync')();
let a = Number(prompt('donner le nombre a'));
let b = Number(prompt('donner le nombre b'));
let c = Number(prompt('donner le nombre c'));
let moyen = ((a*2) + (b*3) + (c*5)) / (2+3+5);
console.log(`la moyen de 3 nombre est ${moyen}`);