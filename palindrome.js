// check palindrome

const str1 = 'madam';

const b = str1.split('').reverse().join('');
const result = str1 === b ? 'palindrome' : 'no palindrom';
console.log(result);


//2nd method

function checkPalindrom(str1) {
    const len = str1.length;
    for(i=0; i<len/2; i++) {
        if(str1[i] !== str1[len - 1 -i]) {
            return false
        }
    }
    return true
}

console.log(checkPalindrom(str1));
