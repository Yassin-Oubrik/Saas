const prompt = require('prompt-sync')();
let n = Number(prompt('Donner un nombre : '));
if (n % 2 === 0) {
    console.log('Le nombre est pair');
} else {
    console.log('Le nombre est impair');
}