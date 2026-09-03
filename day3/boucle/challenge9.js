let prompt = require('prompt-sync')();
let n =Number( prompt('donner un nombre'));
let x=0;
while (n>0) {
        x=x+1;
        n=Math.floor(n/10);
    
}
console.log(x);