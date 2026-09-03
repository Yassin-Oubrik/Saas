const prompt = require('prompt-sync')();
let r = Number(prompt("donner le revenu"));
let s = Number(prompt('donner le score'));
let d = Number(prompt('donne la dure '));
if (r >= 30000 && s >= 700 && d <= 10) {
    console.log("Statut : Éligible");
} 
else if (r >= 30000 && s >= 650 && d <= 15) {
    console.log("Statut : Éligible avec conditions");
} 
else {
    console.log("Statut : Non éligible");
}