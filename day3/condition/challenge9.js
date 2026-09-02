const prompt = require('prompt-sync')();

let c = prompt('Donner un caractère : ');

if (c >= 'A' && c <= 'Z') {
    console.log('Cest une lettre majuscule');
} else if (c >= 'a' && c <= 'z') {
    console.log('C est une lettre minuscule');
} else {
    console.log('Ce n est pas une lettre');
}