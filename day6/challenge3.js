let prompt = require('prompt-sync')();
let e =Number( prompt("donner nombre d element :"));
let tab=[];
let s=0;
for (let i = 0; i < e; i++) {
    let v = Number(prompt('donner valeur'));
    tab[i] = v;
    s=s+tab[i]

}
console.log(tab)
console.log(s)
