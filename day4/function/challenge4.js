function minum(a,b) {
    if (a>b) {
        return 'le nombre min est ' + b ;
    }else if (a<b) {
         return 'le nombre min est ' + a ;

    } else {
        return 'les nombre est egale';
    }
}
console.log(minum(1,5))