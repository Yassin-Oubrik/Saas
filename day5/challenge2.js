let prompt = require('prompt-sync')();
let t = prompt("Entrez un texte ou une phrase :");
let  c = 0;
for (let i = 0; t[i] != undefined; i++) {
    c++;
    
}
console.log(c);