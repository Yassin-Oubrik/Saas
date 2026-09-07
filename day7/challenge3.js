let prompt = require('prompt-sync')();
const rectangle = {
    langueur : Number(prompt('donner la langueur de rectangle')),
    largueur : Number(prompt('donner la largueur de rectangle'))
}
function laire (r){
    console.log(r.langueur * r.largueur);
}
laire(rectangle)