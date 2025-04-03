//secondlargest element in arrays

const a = [1,5,80,6,26,29,98]

function secondLargest(a) {
  const arr = [...a].sort((a,b) => b - a)
  for(i=0;i<arr.length;i++) {
    if(arr[i] !== arr[0]) {
      return arr[i]
    }
  }
  return null
}
console.log(secondLargest(a))