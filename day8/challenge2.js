let prompt = require('prompt-sync')();

let n = Number(prompt('donner un nombre'));

let tab = [];

for (let i = 0; i < n; i++) {
    tab[i] = Number(prompt('donner un nombre'));
}

console.log(tab);

let res;
let j;

for (let i = 1; i < n; i++) {

    res = tab[i];

    for (j = i - 1; j >= 0; j--) {

        if (res < tab[j]) {
            tab[j + 1] = tab[j];
        } else {
            break;
        }
    }

    tab[j + 1] = res;
}

console.log(tab);
//insertion 9arn m3a 9bl okhaz

