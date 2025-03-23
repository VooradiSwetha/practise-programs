let data = new Map();
data.set('name', 'saikrishna');
data.set('id','1');
for(let item of data){
console.log(item)
}

function findMethod(){
    let arr = [{id:1,name:"sai"},{id:2,name:"krishna"}];
    let data = arr.findIndex(x=> x.id==2)
    console.log(data)
}
findMethod()

function greeting(name) {
    return `Hello ${name}`;
   }
console.log(greeting("Saikrishna Nangunuri"));


let name1 = {
    name: 'swetha',
    age: '20',
}

let name2 = {
    name: 'jhony',
    age: '5',
}

const HloFunc = function(param, paam2) {
    console.log(this.name, this.age, param, paam2)
}

HloFunc.call(name1, 'hehejk', name2)
HloFunc.call(name2, 'hiibro')
HloFunc.apply(name2, ['yui', name2])

let animals = {
name4: "Animal name"
}
let cat = Object.create(animals);
console.log('create', cat.name4);


let lesson = {
    lessonName: "Data structures"
    };
    let teacher= {
    teacher: "Saikrishna"
    };
    let course = Object.assign({},lesson,teacher);
console.log('assign', course)

let data2 = ["sai","krishna"];
data2.forEach((item,i)=>{
 console.log(item,i)
})

Array.prototype.forEach((callback)=>{
    for(let i=0;i<=this.length-1;i++){
    callback(this[i],i)
    }
   })

   function Student(){
    this.name = "Saikrishna",
    this.exp= "8"
    }
    Student.prototype.company = "Hexagon"
    let std1 = new Student();
    std1.exp = "9"
    std1.company = 'capg'
    let std2 = new Student();

    console.log(std1);
    console.log(std2)
    // console.log(Student.company);
   
    var result = (function() {
        var x = 10;
        var y = 20;
        return x + y;
    })();
    
    console.log(result); // Output: 30


    let promise = new Promise(function(resolve,reject){
        const x = "Saikrishna";
        const y = "Saikrishna";
        if(x === y){
        resolve("im output")
        } else{
        let err = new Error("Invalid")
        reject(err)
        }
        })
        promise.then((response)=>{
        console.log("success",response)
        }).catch((err)=>{
        console.log("failed",err)
        })
        
    
        setTimeout(() => {
            console.log('swetha fter 5sec');
        }, 5000)


let promise2 = new Promise(function(resolve, reject) {
    let a = 10;
    let b = 20;

    if(a ===b ) {
        resolve('sucess');
    } else {
        reject('failed');
    }
})

promise2.then((result) => {
    console.log(result)
}).catch((results) => {
    console.log(results);
})

// promise.all -> wait for all the promises to resolve or one promise to be rejected
// promise.allSettled -> wait for all the promises to be settled(resolved or rejected)
// promise.any -> return promise value if any one of the promise is fulfilled
// promise.race -> wait until any one of the promise is resolved or rejected

function Outer() {
    let a = 10;
    function Inner() {
        console.log('Im from inner:', a);
    }
    return Inner;
}
let close = Outer();
close();


// HOF EXAMPLE

const opertionMain = function(a,b, operation) {
    return operation(a,b);
}

const add = (x,y) => x*y;
console.log(opertionMain(2,3, add));

// higher order function
function createMultiplier(multiplier) {
    return function (value) {
      return value * multiplier;
    };
  }
  
  const double = createMultiplier(2);
  const triple = createMultiplier(3);
  
  console.log(double(5)); // Output: 10
  console.log(triple(5)); // Output: 15
  

  //shallow copy
  const originalArray = [1,2,8, [1,15]];
  const shalowcopy = [...originalArray];

  shalowcopy[3][1] = 26;
  console.log(shalowcopy);
  console.log(originalArray);

  //deep copy
  let originalArray2 = [1, 2, [3, 4]];
const deepCopy = JSON.parse(JSON.stringify(originalArray2));
deepCopy[2][0] = 100;
console.log(originalArray2); // Output: [1, 2, [3, 4]]
console.log('deep', deepCopy[2]);
// using lodash:
// let array = _.cloneDeep(originalArray2)
// console.log(array);

// longest word

const senetence = function(word) {
    let splitword = word.split(' ');
    let longestWord = '';
    for(i = 0; i<splitword.length; i++) {
        if(splitword[i].length > longestWord.length) {
            longestWord = splitword[i];
        }
    }
    console.log(longestWord);
}

senetence('swethavooradi hlo im from the present practising js')

var swetha;
console.log(swetha);

let example = [1,2,3,4];
console.log(example.pop());

let examplepush = [1,2,3,4];
console.log(examplepush.push(5,6,4));
console.log(examplepush);

const examShift = [1,7,9,8];
console.log(examShift.unshift(1,-1,0,7));
console.log(examShift);

let concatarr = [1,2,3];
let concat2 = [2,3,4];

console.log([...concatarr, ...concat2]);

function abc() {
    console.log(abc.xyz);
}

abc();//undefined because of hoisting
abc.xyz = 20;
abc.xyz = 40;
abc();// output is 40 as line 224 overwrites with 225

const numbers3 = [1,2,3,4]
numbers3[100]=500;
console.log(numbers3)

console.log(typeof typeof 100);// string

const arr = [...'swetha'];
console.log(arr);

console.log(parseInt('10+2'));
console.log(parseInt('7FM'))
console.log(parseInt('F7M'))