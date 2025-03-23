//spread operator

let a2 = [1,2,3,4];
let b = [1,6,7];
const c = [...a2, ...b];// [1,2,3,4,1,6,7]
//copy arrays
const arr = [...b]
console.log(arr);
console.log(c);
//passing arra of values as individual arguments to function
function createExample(arg1,arg2){
    console.log(arg1,arg2); //o/p = 1,2
   }
createExample(...a2);

//rest operator
function Example(...args) {
    console.log(args);
}
Example(2,3,4,5)


//reduce
// adding num 
let red2 = [1,2,3,4, 25]

const red1 = red2.reduce((acc, num) => acc+num, red2[0]);
console.log(red1);

const redHigh = red2.reduce((acc, num) => (num >acc ? num : acc), red2[0]);
console.log(redHigh);


// count how many times words are reapeated
let words = ["apple", "banana", "apple", "orange", "banana", "apple"];

let wordCount = words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});

console.log(wordCount);
// Output: { apple: 3, banana: 2, orange: 1 }
