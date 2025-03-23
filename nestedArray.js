
//1st approach

function findLargestElement(arr) {
  return arr.flat(Infinity).reduce((max, num) => Math.max(max, num), -Infinity);
}

// console.log(findLargestElement([[3, 4, 58], [709, 8, 9, [10, 11]], [-111, [-290,1181], 2]])); // 



function findLargestElement(arr) {
  let max = -Infinity; // Start with the smallest possible number

  function traverse(array) {
    for (let item of array) {
      if (Array.isArray(item)) {
        traverse(item); // Recursively check nested arrays
      } else {
        max = Math.max(max, item); // Update max if a larger number is found
      }
    }
  }

  traverse(arr); // Start processing
  return max;
}

// Example usage:
const array = [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]];
console.log("Largest element:", findLargestElement(array)); // Output: 709

