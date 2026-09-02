const prompt = require('prompt-sync')();

let age = Number(prompt('Donner votre âge  '));
let statut = prompt('Donner votre statut  ');
let interdit = false;
if ((age >= 18 && statut === 'membre' || statut === 'VIP') && !interdit) {
    console.log('Accès autorisé');
} else {
    console.log('Accès refusé');
}