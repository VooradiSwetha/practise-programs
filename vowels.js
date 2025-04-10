const str1 = 'aeioutqrsdasi'

function checkVowles(str1) {
  const result = [];
  const str = str1.split('');
  const vowels = 'aeiou';
  for(i=0;i<str.length;i++) {
    if(vowels.includes(str[i])) {
      result.push(str[i])
    }
  }
  return result;
}

console.log(checkVowles(str1));

let obj= {
  name: 'swetha',
  age:24,
  city:'hyd',
  }
//filter only values with strings

function filterObj(obj) {
  let filterobj1 = {}
  for(let key in obj) {
    if(typeof obj[key] === 'string') {
      filterobj1[key] = obj[key].toUpperCase();
    } else {
      filterobj1[key] = obj[key];
    }
  }
  return filterobj1
}

console.log(filterObj(obj))


function filterObj2(obj) {
  let filterobj1 = {}
  for(let key in obj) {
    if(typeof obj[key] === 'string') {
      filterobj1[key] = obj[key]
    }
  }
  return filterobj1
}

console.log(filterObj2(obj))