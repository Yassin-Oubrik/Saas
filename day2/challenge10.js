const prompt = require('prompt-sync')();
let r = Number(prompt('Donner le rayon : '));
let v= (4 / 3) * Math.PI * r ** 3;
console.log(`Le volume de la sphère est ${v}`);