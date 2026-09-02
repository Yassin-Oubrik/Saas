//ax2+bx+c=0
//Δ=b2−4ac
// Δ > 0 → deux solition
// Δ = 0 → un solution
// Δ < 0 → aucun solition
const prompt = require('prompt-sync')();
let a = Number(prompt('Donner a : '));
let b = Number(prompt('Donner b : '));
let c = Number(prompt('Donner c : '));

let delta = b * b - 4 * a * c;

if (delta > 0) {
    let x1 = (-b - Math.sqrt(delta)) / (2 * a);
    let x2 = (-b + Math.sqrt(delta)) / (2 * a);
    console.log('Deux solutions : x1 = ' + x1 + 'x2 = ' + x2 );

} else if (delta === 0) {
    let x = -b / (2 * a);

    console.log('Une seule solution :  x = ' + x);

} else {
    console.log('Pas de solution réelle');
}