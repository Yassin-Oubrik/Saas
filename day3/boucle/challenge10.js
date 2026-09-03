let prompt = require('prompt-sync')();
let n =Number( prompt('donner un nombre'));
let x=0;
for (let i = 1; i <= n; i++) {
   x=x+i;
}
console.log(x);