let p = require('prompt-sync')();

let n = Number(p('donner le nombre des elements'));

let tab = [];

for (let i = 0; i < n; i++) {
    tab[i] = Number(p('donner un nombre'));
}

let j = 0;

for (let i = 0; i < n; i++) {
    if (tab[i] % 2 == 0) {
        tab[j] = tab[i];
        j++;
    }
}

tab.length = j;

console.log(tab);

