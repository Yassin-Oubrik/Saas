let prompt = require('prompt-sync')();
let n = prompt('donner un nombre');
let s = '*';
e= ' ';
        for (let k = 0; k < n; k++) {
            
        console.log( e.repeat(n-k)+s.repeat(k) +'*'+ s.repeat(k));
        
    }
