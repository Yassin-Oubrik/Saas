const prompt = require('prompt-sync')();

let n = Number(prompt('Donner un nombre : '));
let bin = '';
let hex = '';
let chiffres = '0123456789ABCDEF';

let temp = n;
while (temp > 0) {
    bin = (temp % 2) + bin;
    temp = Math.floor(temp / 2);
}
let  temph = n;

while (temph > 0) {
    hex = chiffres[temph % 16] + hex;
    temph = Math.floor(temph / 16);
}

console.log(`Binaire : ${bin}`);
console.log(`Hexadécimal : ${hex}`);