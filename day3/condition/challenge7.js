const prompt = require('prompt-sync')();

let c = prompt('Donner un caractère : ');

let code = c.charCodeAt(0);

if (code >= 65 && code <= 90) {
    console.log('C est une lettre majuscule');
} else {
    console.log('Ce n est pas une lettre majuscule');
}