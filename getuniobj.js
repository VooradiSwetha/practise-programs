const arr = [
  { name: "sai" },
  { name: "Nang" },
  { name: "sai" },
  { name: "Nang" },
  { name: "111111" }
];


function uniqObj(arr) {
  let uniq = []
  let seen = {}

  for(i=0;i<arr.length; i++) {
    const currentItem = arr[i].name
    if(!seen[currentItem]) {
      uniq.push(arr[i])
      seen[currentItem] = true
    }
  }
  return uniq
}

console.log(uniqObj(arr));

// 2nd approach  using map


const uniqArray = [...new Map(arr.map((obj) => 
  [obj.name, obj])).values()]
console.log(uniqArray);