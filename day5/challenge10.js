let prompt = require('prompt-sync')();
let chain =prompt('donner un chaine');
let souc = prompt('donner sous chain');
let t = false;
for (let i = 0; i < chain.length; i++) {
    let y = '';
    if (chain[i]==souc[0]) {
        for (let j = i; j <i+ souc.length; j++) {
            y=y+chain[j];
            if(y == souc){
                 t =(true)
            }
            
        }
            // y = chain.slice(i,i+souc.length);
     
    }
    
}
if(t==true){
    console.log(true)
}else{
    console.log(false);
}