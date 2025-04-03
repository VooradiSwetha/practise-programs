// Find the max count of consecutive 1’s in an array

const a = [1, 1, 9, 1, 9, 19, 7, 1, 1, 1, 2, 5, 1]

function findOne(a) {
    let count = 0
    let maxCount = 0
    for(i=0; i<a.length; i++) { // or for(let num of a)
        if(a[i] === 1) { /// or if(num ===1)
            count++
            maxCount = Math.max(maxCount, count);
        } else {
            count = 0;
        }
    }
    return maxCount;
}

console.log(findOne(a));