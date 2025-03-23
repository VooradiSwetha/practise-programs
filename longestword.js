//find longest word in given sentence


function findLongestWord(str1){
    const a = str1.split(' ');
    let longWord = '';
    for(i=0; i<a.length; i++) {
        if(a[i].length > longWord.length) {
            longWord = a[i]
        }
    }
    return longWord;
}
console.log(findLongestWord("Hi Iam SwethaVooradi Iam a UI Developer"));

