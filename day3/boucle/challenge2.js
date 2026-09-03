let prompt = require("prompt-sync")();
let n = Number(prompt('donner un nombre entier'));
let i = 1;
let factorie =1 ;
while(i<=5){
    factorie *=i ;
    i++ ;
}
console.log(factorie)