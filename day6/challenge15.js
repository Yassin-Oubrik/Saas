let p = require('prompt-sync')();
let n = Number(p('donner un nombre element'));

tab=[];
for (let i = 0; i < n; i++) {
    tab[i]= Number(p('donner un nombre'));
}
tab1=[];
for (let i = 0; i < n; i++) {
    tab1[i]= Number(p('donner un nombre'));
}

let tab3=[...tab , ...tab1]
console.log(tab3)