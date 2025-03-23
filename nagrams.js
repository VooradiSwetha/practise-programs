//find anagram for the 2 strings, meaning two of them have same letters

const a = 'silent';
const b = 'entsil';

const sortAr = a.split('').sort().join('');
// convert to lowercase for case sensitivity
// const sortAr = a.toLowerCase().split("").sort().join("") 
//same goes for other string
const sortAr1 = b.split('').sort().join('');
const result = sortAr === sortAr1 ? 'anagrams' : 'not anagrams';
console.log(result);


//2nd method
// str1 = anagram
//str2 = nagaram
function isStringCreated(str1,str2) {
    if(str1.length !== str2.length) return false
    const freq = {};

    for(const val of str1) {
        // checkes for each character how many times they occur and add the count as an key value to freq
        freq[val] = (freq[val] || 0) + 1;
    }
    for(const val of str2) {
    if(freq[val]) { //checked each and every char if exists in str2
        //if it exists then it will reduce freq count in freq variable
        //when all keys become zero it wil return true or else false
        freq[val] -= 1;
    } else {
        return false
    }
}
return true
}

console.log(isStringCreated('anagram', 'nagaram'));