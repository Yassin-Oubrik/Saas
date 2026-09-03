const prompt = require('prompt-sync')();

let x1 = Number(prompt('x1'));
let y1 = Number(prompt('y1'));
let x2 = Number(prompt('x2'));
let y2 = Number(prompt('y2'));
let x = Number(prompt('x'));
let y = Number(prompt('y'));
let p1 = (y - y1) / (x - x1);
let p2 = (y2 - y1) / (x2 - x1);
if (p1 == p2 && x >= Math.min(x1, x2) && x <= Math.max(x1, x2)
    && y >= Math.min(y1, y2) && y <= Math.max(y1, y2)) {
    console.log('oui');
} else {
    console.log('non');
}
// p1 == p2 
// x  entre x1 et x2
// y  entre y1 et y2