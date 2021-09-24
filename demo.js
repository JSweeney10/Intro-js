

// FileSystem.readFile('./test.json', (err, data) => {
//     console.log(data,toString())

// });
// console.log('before')

console.log('first');
setTimeout(() =>  {
    console.log('third');
    setTimeout(() => {
        console.log('fith');
    }, 5000);
    setTimeout(() => {
        console.log('fourth');
    }, 2500
    }
}