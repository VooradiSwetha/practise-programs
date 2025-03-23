// Given a string, write a javascript function to count the
// occurrences of each character in the string.


const str = 'hellohelloss'

function countChar(str) {
    const count = {};
    for(i=0; i<str.length; i++) {
        count[str[i]] = (count[str[i]] || 0) + 1;
    }
    return count;
}
console.log(countChar(str));

let x = 10;
x += (x++, x);
console.log(x);


//count characters and return them in this format
// 