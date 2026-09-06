let prompt = require('prompt-sync')();
let chain =prompt('donner un chaine');
let c = prompt('donner un caractere');
let n = 0;
for (let i = 0; i < chain.length; i++) {
    if ((chain[i])== c) {
        n++;
    } 
}
console.log('fois '+ n)