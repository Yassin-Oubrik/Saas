const prompt = require('prompt-sync')();

let prix = Number(prompt('Donner le prix : '));
let reduction = Number(prompt('Donner le pourcentage de réduction : '));

let montR = prix * reduction / 100;
let prixF = prix - montR;

console.log('Montant de la réduction : ' + montR);
console.log('Prix final : ' + prixF);