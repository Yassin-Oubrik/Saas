let p = require('prompt-sync')();
let n = Number(p('donner un nombre'));

tab=[];
for (let i = 0; i < n; i++) {
    tab[i]= Number(p('donner un nombre'));
}
let y=Number(p('donner un actuelle  nombre'));
let x = Number(p('donner un nouvelle  nombre'));
for (let i = 0; i<n; i++) {
 if (tab[i]==y) {
    tab[i]=x
 } 
}
console.log(tab)

