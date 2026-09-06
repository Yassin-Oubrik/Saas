let prompt = require('prompt-sync')();
let chain =  prompt('donner un chain').toLowerCase();
let Schain = prompt('donner un autre chain').toLowerCase();
let res = 0;

for (let i = 0; i < chain.length; i++) {
    for (let j = 0; j < Schain.length; j++) {      
            if (chain[i]==Schain[j]) {
            res= res+ 1;
            break;
           }        
    }
}
if (res == chain.length) {
    console.log(true)
}else(
    console.log(false)
)

