//reverse a string without using built in method

//1 method
const a = 'swetha';
const b = a.split('').reverse().join('');
console.log(b);

//manual method
function revString(a) {
    let revString = ''
    //start with the end of a string; till index 0 ; by decaresing everytime
    for(i=a.length - 1; i>=0 ;i--) {
        revString += a[i];
    }
    return revString;
}
console.log(revString(a));

//converting it to array
function revStringArr(a) {
    let revStringArr = [];
    //start with the end of a string; till index 0 ; by decaresing everytime
    for(i=a.length - 1; i>=0 ;i--) {
        //op of revstringArr is ['a', 'h', 't', 'e', 'w', 's']
        revStringArr.push(a[i]);
    }
    return revStringArr.join(''); // ahtews
}
console.log(revStringArr('swetha'));