const a = [8,6,4,7,2]
const b = [1,2,3,9]

const res = [...a,...b].sort((a,b) => a - b); //1st method
const res1 = a.concat(b).sort((a,b) => a - b); //2nd method
console.log(res);
console.log(res1);

function mergeSort(arr1, arr2) {
  let mergedArray = [];
  for(let arr of arr1) {
    mergedArray.push(arr);
  }
  for(let arr of arr2) {
    mergedArray.push(arr);
  }

  for(i=0; i<mergedArray.length; i++) {
    for(j=i+1; j<mergedArray.length; j++) {
      //for merging by using swap
      // if(mergedArray[i] > mergedArray[j]) {
      //   let temp = mergedArray[i];
      //   mergedArray[i] = mergedArray[j];
      //   mergedArray[j] = temp
      // }
      //merging by using destructuring
      // if we want to check in big to small then use <
      if(mergedArray[i] > mergedArray[j]) {
        [mergedArray[i], mergedArray[j]] = [mergedArray[j], mergedArray[i]] 
      }
    }
  }
  return mergedArray
}

console.log(mergeSort(a,b));


//write js function to sort elements in ascending /descending order

function sortElements(a) {
  let sorted = [...a];
  for(i=0;i<sorted.length;i++) {
    for(j=i+1;j<sorted.length;j++) {
      if(sorted[i] > sorted[j]) {
        [sorted[i], sorted[j]] = [sorted[j], sorted[i]]
      }
    }
  }
  return sorted;
}
console.log(sortElements(a));