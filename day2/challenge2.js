const prompt= require('prompt-sync')();
let templ = parseFloat(prompt('saisir temerateur'));
let tempk = templ +273.15 ;
console.log(`${templ} c ${tempk}`);
