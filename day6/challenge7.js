let p = require('prompt-sync')();
let n = Number(p('donner un nombre'));
tab=[];
for (let i = 0; i < n; i++) {
    tab[i]= Number(p('donner un nombre'));
}
let res;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
          if (tab[i]<tab[j]) {
            res=tab[i];
            tab[i]=tab[j];
            tab[j]=res;        }
    }
}
console.log(tab);