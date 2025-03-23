//. Given 2 arrays that are sorted [0,3,4,31] and [4,6,30].
// Merge them and sort [0,3,4,4,6,30,31] ?

// 1st approach
const arr1 = [0,3,4,31];
const arr2 = [4,6,30];
function mergeSort(arr1, arr2) {
    return arr1.concat(arr2).sort((a,b) => a-b);
}
console.log(mergeSort(arr1,arr2));


//2nd approach