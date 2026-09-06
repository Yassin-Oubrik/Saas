let prompt = require('prompt-sync')();
let e =Number( prompt("donner nombre d element :"));
let tab = [];
for (let i = 0; i < e; i++) {
tab[i]=Number(prompt('donnaer un valeur'));
}
let res = tab[0];
for (let i = 0; i < tab.length; i++) {
            if (res<tab[i]) {
           res=tab[i];
        }
        
}
console.log(res)