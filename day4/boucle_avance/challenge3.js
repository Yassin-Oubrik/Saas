let prompt = require('prompt-sync')();
let n = Number(prompt('Donner un nombre : '));

for (let i = 2; i <= n; i++) {
    let compteur = 0;
    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
            compteur++;
        }
    }
    if (compteur == 2) {
        console.log(i);
    }
}