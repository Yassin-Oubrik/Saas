const prompt = require('prompt-sync')();
let a = Number(prompt('donner la valeur de base '));
let b = Number(prompt('donner la valeur de base '));
let p=1;
for (let i = 1; i <= b; i++) {
        p*=a;
}
console.log(p);
