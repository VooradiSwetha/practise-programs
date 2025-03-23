const a = [2,-3,-4,-6,6,10,-50,44]
const b = [];
function evnNum(a) {
    for(i=0; i<a.length; i++) {
        if(a[i] % 2 === 0) {
            b.push(a[i]);
        }
    }
    return b;
}
console.log(evnNum(a));