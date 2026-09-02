const prompt = require('prompt-sync')();

let a = Number(prompt('Donner le nombre d’années : '));

console.log('1. Mois');
console.log('2. Jours');
console.log('3. Heures');
console.log('4. Minutes');
console.log('5. Secondes');

let choix = Number(prompt('Votre choix : '));

switch (choix) {
    case 1:
        console.log('Mois : ' + (a * 12));
        break;

    case 2:
        console.log('Jours : ' + (a * 365));
        break;

    case 3:
        console.log('Heures : ' + (a * 365 * 24));
        break;

    case 4:
        console.log('Minutes : ' + (a * 365 * 24 * 60));
        break;

    case 5:
        console.log('Secondes : ' + (a * 365 * 24 * 60 * 60));
        break;

    default:
        console.log('Choix invalide');
}