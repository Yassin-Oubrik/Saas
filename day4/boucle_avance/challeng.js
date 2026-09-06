let prompt = require('prompt-sync')();
let n = Number(prompt('donner un nomre'));


for (let i = 1; i <= n; i++) {
    let e ='';
for (let j = 1; j <= n -i; j++) {
                     e=e+' ';
     
}
for (let j = 1; j <= 2 * i - 1; j++) {
        e += '*';
    }
console.log(e)
}

