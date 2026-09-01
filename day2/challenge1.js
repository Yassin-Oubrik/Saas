const prompt=require('prompt-sync')();
const nom = prompt('saisir votre nom');
const prenom = prompt('saisir votre prenom');
const age = prompt('sisaire votre age');
const sexe = prompt('saisir votre sexe femme/homme');
const maile = prompt('saisir votre adresse emaile');
console.log(`votre nom est ${nom} et votre prenom est ${prenom}, age: ${age} sexe : ${sexe} emaile ${maile}`);