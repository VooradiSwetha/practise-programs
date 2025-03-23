// find maximum number in an array
// const a = [1,22,3,66]
function maxNumberArr(a) {
    if(a.length === 0) {
        return undefined;
        //handling empty array here
    }
    let max = a[0];
    for(i=1; i<a.length; i++) {
        if(a[i] > max) {
            max = a[i];
        }
    }
    return max;
}

console.log(maxNumberArr([1, 6, -33, 9, 4, 8, 2]));