let x =Math.floor(Math.random() * 7) + 1;
let res = '';
switch (x) {
   case 1: 
        res = "lundi"; 
        break; 
    case 2: 
        res = "mardi"; 
        break; 
    case 3: 
        res = "Mercredi"; 
        break; 
    case 4: 
        res = "jeudi"; 
        break; 
    case 5: 
        res = "vendredi"; 
        break; 
    case 6: 
        res = "samedi"; 
        break; 

    default:
        res='dimanch';
        break;
}
console.log(res);