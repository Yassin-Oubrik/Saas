const prompt = require('prompt-sync')();

let c = prompt('Donner un caractère : ');

switch (c) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log('C est une voyelle');
        break;
    default:
        console.log('Ce n est pas une voyelle');
}
//les nombre voyelle a, e, i, o, u