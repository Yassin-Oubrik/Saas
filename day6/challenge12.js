let p = require('prompt-sync')();
let n = Number(p('donner un nombre'));

tab=[];
for (let i = 0; i < n; i++) {
    tab[i]= Number(p('donner un nombre'));
}
for (let i = 0; i < n; i++) {
    if (tab[i]%2==0) {
        console.log(tab[i])
    }
}