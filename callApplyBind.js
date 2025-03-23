// call
let examp1 = {
    name: 'swetha',
    age: '26',
}
let examp2 = {
    name: 'sushma',
    age: '27',
}
function sister(thirdparam) {
    console.log(this.name, this.age, thirdparam);
}
// calling a object for fuction
sister.call(examp1, 'sruthi') // o/p swetha 26 sruthi
//apply
sister.apply(examp2, ['ojectapply']) // apply

// example2
// calling a method on another object
let fam = {
    parents: 'mom&dad',
    siblings: 4,
    elder: function(thirdparam){
        console.log(this.parents, this.siblings, thirdparam);
    }
}

let fam2 = {parents: 'dad&mom', siblings: 3}
fam.elder.call(fam2, 'call'); // dad&mom 3
fam.elder('calling'); // mom&dad 4

// apply is same as call but it wil pass arguments as array
fam.elder.apply(fam2, ['apply']) // apply

//binding
const bindFamily = fam.elder.bind(fam, 'binding');
bindFamily();