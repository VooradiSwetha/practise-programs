//check with even numbers- return false
//check 0 and 1 as they are not prime- return false
//check with only 2(its a prime) - true



function primeNum(num) {
    if(num === 2) return true
    if(num <=1) return false
    if(num %2 === 0) return false
    //check starts from 3 to square root of num and skipp even num by increase count to +2
    for(let i =3; i<=Math.sqrt(num); i+=2) {
        if(num % i === 0) return false
    }
    return true;
    //if not divisible by any number
}
console.log(primeNum(99));


// // this function is to check all primes from 1 to n
// function allPrime(n) {
//     const primes = [];
//     for(let i=2; i<=n; i++) {
//         if(primeNum(i)) {
//             primes.push(i)
//         }
//     }
//     return primes;
// }
// console.log(allPrime(50))

const getCounter = () => {
    let count = 0;
    return () => ++count;
};

const counter1 = getCounter();
const counter2 = getCounter();
console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());