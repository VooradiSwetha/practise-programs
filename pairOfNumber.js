const nums1 = [4, -3, 2, -4, 3, 1, 2, 5, -4];
//find paris of numbers whose sum equals 0
//output = [[4,-4], [3,-3]]
const result1 = [];
for(i=0; i<nums1.length; i++) {
    for(j=i+1; j<nums1.length; j++) {
        if(nums1[i] + nums1[j] === 0) {
        result1.push([nums1[i], nums1[j]])
        }
    }
}
console.log(result1);


const nums = [4, -3, 2, -4, 3, 1, 2, 5, -4];
const result = [];
const uniquePairs = new Set(); // To track unique pairs

for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === 0) {
            let pair = [nums[i], nums[j]].sort((a, b) => a - b); // Sort to maintain order
            let pairString = pair.toString(); // Convert to string for uniqueness check

            if (!uniquePairs.has(pairString)) {
                result.push(pair);
                uniquePairs.add(pairString); // Mark pair as seen
            }
        }
    }
}

console.log(result); // ✅ Output: [[-4, 4], [-3, 3]]
