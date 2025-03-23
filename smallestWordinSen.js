//find smallest word in given sentence

function smallSen(a) {
    const b = a.split(' ');
    let smallWord = b[0];
    for(i=1; i<b.length; i++) {
        if(b[i].length < smallWord.length) {
            smallWord = b[i];
        }
    }
    return smallWord;

}

console.log(smallSen('hlo Im swetha the to UI developer'))