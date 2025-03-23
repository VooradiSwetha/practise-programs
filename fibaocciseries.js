// find fibanocci series of number

function findFibanocii(a) {
    if(a === 1) return [0]; // the fianocci series starts with 0 soif we want the first term then directly retun [0], by avoiding unnessary loops
    if(a<=0) return []; // if a=0 or negative then it wil return negative values
    const series = [0,1]
    for(i=2 ; i<a; i++) {
        series.push(series[i-1]+series[i-2])
    }
    return series; 
}
console.log(findFibanocii(10));