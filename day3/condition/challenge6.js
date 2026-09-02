const prompt = require('prompt-sync')();

let n = Number(prompt('Donner un nombre : '));

if (n < 0) {
    console.log('Le nombre est négatif');
} else if (n > 0) {
    console.log('Le nombre est positif');
} else {
    console.log('Le nombre est nul');
}