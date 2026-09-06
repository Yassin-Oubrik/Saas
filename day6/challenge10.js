let p = require('prompt-sync')();
let n = Number(p('donner un nombre'));

tab=[];
for (let i = 0; i < n; i++) {
    tab[i]= Number(p('donner un nombre'));
}
let x = Number(p('donner un nombre'));
let res=false;
for (let i = 0; i<n; i++) {
 if (tab[i]==x) {
    res=true
 } 
}
console.log(res)

