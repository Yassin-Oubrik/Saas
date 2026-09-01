const prompt = require('prompt-sync')();

const km = Number(prompt("Entrez la vitesse : "));

const ms = km * 0.27778;

console.log(`Vitesse est :   ${ms}  km/h `);