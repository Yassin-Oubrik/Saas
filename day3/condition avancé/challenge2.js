const prompt = require('prompt-sync')();

let a = Number(prompt('Donner votre âge : '));
let t = Number(prompt('Donner le type de voiture (1/2/3) : '));
let n = Number(prompt('Donner le nombre d’accidents : '));

let prim = 80;

if (a < 25) {
    prim = prim * 1.5;
} else if (a > 65) {
    prim = prim * 1.2;
}

if (t === 1) {
    prim = prim * 2;
} else if (t === 2) {
    prim = prim * 1.2;
} else if (t === 3) {
    prim = prim * 1.1;
}

if (n > 1) {
    prim = prim * 1.3;
}

console.log("La prime d'assurance est : " + prim);