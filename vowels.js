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