const prompt = require('prompt-sync')();
let n = Number(prompt('Donner un nombre : '));
if (n >= 10 && n <= 100) {
    console.log('Le nombre appartient à lintervalle');
} else {
    console.log('Le nombre nappartient pas à lintervalle');
}