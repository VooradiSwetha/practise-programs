function isPrime(num) {
    if(num === 2) return true;
    if(num <= 1) return false;
    if(num % 2 === 0) return false;

    for(let i=3; i<=Math.sqrt(num); i+=2) {
        if(num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(25));

function allPrime(n) {
    let primes = [];
    for(let i=2; i<=n; i++) {
        if(isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}
console.log(allPrime(50));