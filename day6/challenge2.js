let prompt = require('prompt-sync')();
let e = prompt("donner nombre d element :");
let tab=[];
for (let i = 0; i < e; i++) {
    let v = prompt('donner valeur')
    tab[i] = v;
}
console.log(tab)