let p = require('prompt-sync')();
let n = Number(p('donner un nombre'));
tab=[];
for (let i = 0; i < n; i++) {
    tab[i]= Number(p('donner un nombre'));
}
let tab1=[];
for (let i = 0; i < n; i++) {
       tab1[i]=tab[i];
    
    
}
console.log(tab)
console.log(tab1)