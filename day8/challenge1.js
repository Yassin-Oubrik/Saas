let prompt= require('prompt-sync')();
let n = prompt('donner un nombre');
let tab = []
for (let i = 0; i < n; i++) {
   tab[i]= Number(prompt('donner un nombre'));
}
console.log(tab)
let res ;
//par selection
// for (let i = 0; i < n; i++) {
//     for (let j = i; j < n; j++) {
//         if (tab[i]>tab[j]) {
//             res=tab[i]
//             tab[i]=tab[j]
//             tab[j]=res
//         }
        
//     }
    
// }



//  Tri à Bulles //jiran
for (let i = 0; i <n-i; i++) {
for (let j = 0; j < n-1-i; j++) {
    if (tab[j]> tab[j+1]) {
        res= tab[j]
        tab[j]=tab[j+1]
        tab[j+1]=res
    }
    
}    
}
console.log(tab);


