let prompt =require('prompt-sync')();
let n = Number(prompt('donner un nombre a plesieur chifre'));
let x=0;
for (let i = 0; n>0; i++) {
     x= n % 10 ;
   n = Math.floor(n/10);
   console.log(x);
    
}