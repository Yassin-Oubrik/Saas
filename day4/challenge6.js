function fiab(n) {
    let a=0;
    let b=1;
    let f=0;
    for (let i = 0; i < n; i++) {
        f= a+b;
        console.log(f)
        a=b;
        b=f;
        
    }
}
fiab(6);