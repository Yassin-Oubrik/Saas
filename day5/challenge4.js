let prompt = require('prompt-sync')();
let a = prompt("Entrez un texte ou une phrase :");
let b = prompt("Entrez un texte ou une phrase :");
if (a != b ) {
    console.log('différentes')
} else {
    console.log('sont egale')
}