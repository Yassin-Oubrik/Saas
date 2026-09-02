const prompt = require('prompt-sync')();

let total = Number(prompt('Donner le nombre de secondes : '));
let heures = Math.floor(total / 3600);
let minutes = Math.floor((total % 3600) / 60);
let secondes = total % 60;
console.log('Heures : ' + heures);
console.log('Minutes : ' + minutes);
console.log('Secondes : ' + secondes);