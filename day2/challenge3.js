const prompt = require('prompt-sync')();
const km = parseFloat(prompt('donne la distanece'));
const yards = km * 1093.61 ;
console.log(`Distance en yards : "  ${yards}`);