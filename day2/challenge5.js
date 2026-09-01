const prompt = require('prompt-sync')();
let c = prompt('donner la la température ');
if (c<0){
    console.log( "Solide");
}if (c>=0 && c<100) {
    console.log('liquide');
} else {
    console.log('gaz');
}