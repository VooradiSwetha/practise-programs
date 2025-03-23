const str = 'swetha in fe developer capg'

function revSentenve(str) {
  let str2 = str.split(' ');
  let revString = '';
  for(i=str2.length-1; i>=0; i--) {
    revString += str2[i] + (i>0 ? ' ' : '')
  }
  return revString;
}

console.log(revSentenve(str));