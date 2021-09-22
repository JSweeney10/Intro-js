// LIFO is the default behavior of an array (stack)
// Think of pancakes

let stack = [] // no pancakes yet

function cookPancakes() {
    for(let p = 0; p < 16; p++) {
        stack.push('pancake' + p)
    }
}

function servePancake() {
    console.log(stack.pop() )
}

cookPancakes()

const kids = [{
    name: 'Benji', age: 2, pancakes: 2 },



console.log(stack)