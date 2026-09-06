let prompt = require('prompt-sync')();
let chain =prompt('donner un chaine');
let x ='';
for (let i = 0; i < chain.length; i++) {
    if (chain[i]!=' ') {
        x=x+chain[i];
    }
    
}
console.log(x);