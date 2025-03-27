const text = 'swetha is a fe developer'

function checkString(text) {
  const result = [];
  const str1 = text.split(' ');
  
  for(i=0;i<str1.length;i++) {
    let revWord = '';
    for(let j=str1[i].length-1;j>=0;j--) {
      revWord += str1[i][j];
    }
    result.push(revWord)
  }
  return result.join(' ');
}
console.log(checkString(text));