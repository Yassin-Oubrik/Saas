let prompt =require('prompt-sync')();
let n = Number(prompt('donner un nombre '));
let a = 0;
let b = 1;
let f =0;
for (let i = 1; i <= n; i++) {
 f = a + b;
console.log(f);
a =b; 
b=f;
}
