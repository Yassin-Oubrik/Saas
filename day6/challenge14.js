let p = require('prompt-sync')();
let n = Number(p('donner un nombre'));

tab=[];
for (let i = 0; i < n; i++) {
    tab[i]= Number(p('donner un nombre'));
}
let m=0;
for (let i = 0; i < n; i++) {
m=m+tab[i]
}
console.log(m)