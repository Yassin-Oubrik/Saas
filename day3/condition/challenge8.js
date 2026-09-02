const prompt = require('prompt-sync')();

let moyenne = Number(prompt('Donner la moyenne : '));

if (moyenne < 10) {
    console.log('Recalé');
} else if (moyenne < 12) {
    console.log('Mention passable');
} else if (moyenne < 14) {
    console.log('Mention assez bien');
} else if (moyenne < 16) {
    console.log('Mention bien');
} else {
    console.log('Mention très bien');
}