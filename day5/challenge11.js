    
// console.log(text.slice(0,x)  == text.slice(x+1).split('').reverse().join(""))
// return;

function reverse(text) {
    let x= Math.floor((text.length)/2);
    let c = '';

for (let i = 0; i < x; i++) {
    c = c + text[i];
}

let v = '';
if (text.length % 2 == 0) {
    for (let i = text.length - 1; i >= x; i--) {
        v = v + text[i];
    }
} else {
    for (let i = text.length - 1; i > x; i--) {
        v = v + text[i];
    }
}
if (v == c) {
    console.log(true);
} else {
    console.log(false);
}
}
reverse('lool');
reverse('looyool');
reverse('kuubhjn');