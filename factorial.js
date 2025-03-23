function findFact(a) {
    let result = 1;
    for(i=2; i<=a; i++) {
        result *= i;
    }
    return result;
}
console.log(findFact(6));
