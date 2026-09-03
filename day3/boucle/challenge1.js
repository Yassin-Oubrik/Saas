let prompt = require("prompt-sync")();
let x = Number(prompt('donner un nombre'));
for (let i = 1; i < 11; i++) {
    console.log(x*i);
}
