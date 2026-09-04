function maximum(a,b) {
    if (a>b) {
        return 'le nombre max est ' + a ;
    }else if (a<b) {
         return 'le nombre max est ' + b ;

    } else {
        return 'les nombre est egale';
    }
}
console.log(maximum(1,5))