// remove duplicate elemens from array

const a = [1,2,3,4,3,2,1,4,-8,-8,-9]

console.log(Array.from(new Set(a))); //method1
console.log([...new Set(a)]); //method2

//method 3
function removDup(a) {
    const uniqVal = []
    for(i=0; i<a.length; i++) {
        if(uniqVal.indexOf(a[i]) === -1) {// indexof return -1 if element is not found and will return index of element if its found
            uniqVal.push(a[i]);
        }
    }
    return uniqVal;
}
console.log(removDup(a));