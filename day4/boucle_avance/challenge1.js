const prompt = require('prompt-sync')();
let n = Number(prompt('Donner un nombre'));
for (let i = 10; i >= 1; i--) {
    console.log(n * i);
}