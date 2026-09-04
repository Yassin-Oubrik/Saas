const prompt = require('prompt-sync')();

let acc = Number(prompt('jours accord'));
let utls = Number(prompt('jours utulise'));
let type = Number(prompt('type'));
if (utls > acc) {
    console.log('Alerte les jours utiliss depasse les jours accord');
} else {
    if (type == 1) {
        console.log(acc - utls);
    } else if (type == 0) {
        console.log((acc / 2) - utls);
    }
}