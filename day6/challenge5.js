let prompt= require('prompt-sync')();
let n = Number(prompt('donner un nombre de tableaux'));
let tab = [];
for (let i = 0; i < n; i++) {
    tab[i]=Number(prompt('donner un nombre'));  
}
let x = tab[0];
for (let i = 0; i < tab.length; i++) {
        if (tab[i]<x) {
        x=tab[i];
    }
}
console.log('le minumum est ' + x)
console.log( tab)