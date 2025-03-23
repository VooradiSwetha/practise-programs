//destructuring
let abc = {
    name: 'swetha',
    age: 26,
    place: 'hyd',
    area: 'ptc'
}
const { name: Myname, place, place3= 'ptc7', ...rest} = abc;
console.log(Myname, place);
console.log(rest);
console.log(place3);


const shallowc = [1,2,[3,4]]
const shallowab = Object.assign({}, shallowc);
shallowab[0] = 9
shallowab[2][0] = 8
console.log('shallowcpy', shallowab);
console.log('originl', shallowc);

// const deepc = JSON.parse(JSON.stringify(shallowc))
// deepc[2][1] = 15;
// console.log(deepc[2])
// console.log(shallowc[2])

// let promise = new Promise(function(resolve,reject) {
//     let a = 5
//     let b = 4
//     if(a===b) {
//          resolve('success')
//     } else {
//         reject('error');
//     }
// })
// promise.then((response) => {
//     console.log(response);
// }).catch((error) => {
//     console.log(error);
// })

function outer() {
    var a = 'hlo';
    function Inner() {
        console.log(a)
    }
    return Inner
}
let closure = outer()
closure()

function print() {
    console.log('hlome')
}
function printing(print) {
    console.log('i wil print1st');
    print()
}
printing(print);