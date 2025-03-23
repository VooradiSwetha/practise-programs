// Write a function sumOfThirds(arr), which takes an
// array arr as an argument. This function should return a sum of
// every third number in the array, starting from the first one.
// 𝐃𝐢𝐫𝐞𝐜𝐭𝐢𝐨𝐧𝐬:
// If the input array is empty or contains less than 3 numbers then return 0.
// The input array will contain only numbers

const a = [5, 1, 2, 10, 20, 30, 3, 4, 6, 7]
function ThirdSum(a) {
    if(a.length<3) return 0// checks if length is less than 3 then returns 0
    let sum = 0;
for(i=0;i<a.length; i += 3) {// starting from index checks every 3rds element
    sum += a[i];
}
return sum;
}

console.log(ThirdSum(a));