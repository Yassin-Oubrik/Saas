let x = 'youcode';
let y = x[0].toUpperCase();
let c = '';
for (let i = 1; i < x.length; i++) {
    c = c + x[i];
}
console.log(y + c);