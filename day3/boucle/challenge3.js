let prompt = require('prompt-sync')();
let n = Number(prompt('donner un nombre entier '));
let somme = 0;
for (let i = 1; i <= n; i++) {
somme +=i;
}
console.log(somme)