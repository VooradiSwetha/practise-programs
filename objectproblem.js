const obj = [{
    key: 'sample 1',
    data: 'data1',
}, {
    key: 'sample 1',
    data: 'data1',
}, {
    key: 'sample 2',
    data: 'data2',
}, {
    key: 'sample 1',
    data: 'data1',
}, {
    key: 'sample 3',
    data: 'data1',
}, {
    key: 'sample 4',
    data: 'data1',
}]

const output = {};
obj.forEach(item => {
    if(output[item.key]) {
        output[item.key].push(item);
    } else{
        output[item.key] = [item];
    }
})

console.log(output);