let prompt = require('prompt-sync')();
let e = Number(prompt('donner un element de tableaux'));
let facteur = Number(prompt('donner un facteur'));
let tab=[];
for(i=0;i<e;i++){
    tab[i]=Number(prompt('donner un nombre'));
    tab[i]*=facteur;
}
console.log(tab)
