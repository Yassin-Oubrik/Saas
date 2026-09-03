const prompt = require('prompt-sync')();
let h1 = Number(prompt('heure 1 '));
let m1 = Number(prompt('minute 1  '));
let s1 = Number(prompt('seconde 1  '));
let h2 = Number(prompt('heure 2 '));
let m2 = Number(prompt('minute 2 '));
let s2 = Number(prompt('seconde 2'));
if (h1 < h2) {
    console.log('Le premie instant vient avant le deuxieme');
} else if (h1 > h2) {
    console.log('Le deuxième instant vient avant le pemie');
} else {
    if (m1 < m2) {
        console.log('Le premie instant vient avant le deuxieme');
    } else if (m1 > m2) {
        console.log('Le deuxieme instant vient avant le pemie');
    } else {
        if (s1 < s2) {
            console.log('Le premie instant vient avant le deuxieme');
        } else if (s1 > s2) {
            console.log('Le deuxieme instant vient avant le pemie');
        } else {
            console.log('Il sagit du même instant');
        }
    }
}