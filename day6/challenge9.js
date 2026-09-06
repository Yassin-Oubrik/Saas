let p = require('prompt-sync')();
let n = Number(p('donner un nombre'));
tab=[];
for (let i = 0; i < n; i++) {
    tab[i]= Number(p('donner un nombre'));
}
let res;
for (let i = 0; i <n/2; i++) {
    res=tab[i];
    tab[i]=tab[n-1-i]
    tab[n-1-i]=res;

}
// console.log(tab)
// let tab1=[]
// let res=0;
// for (let i = n-1; i >=0; i--) {
//     tab1[res]=tab[i]
//     res++;
// }
// for (let i = 0; i < n; i++) {
//    tab[i]= tab1[i]
    
// }
// console.log(tab);




// let tab1=[]
// let res=0;
// for (let i = n-1; i >=0; i--) {
//     tab1[res]=tab[i]
  
//     res++;
    
// }
// tab = 1<2 ? tab1: res;
// console.log(tab);