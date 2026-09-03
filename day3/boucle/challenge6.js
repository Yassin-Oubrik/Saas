let prompt = require('prompt-sync')();
let n = Number(prompt('donner un nombre'))
let p=0;
for (let i = 1; i <=n; i++) {
    p+=2
    console.log(p);
}