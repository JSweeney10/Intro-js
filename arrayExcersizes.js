
function findFruitIndex(arr, item) {
    let indexOfFruit = arr.indexOf(item)
    return indexOfFruit
}

let array123 = ['mango', 'dorian', 'loquat', 'jackfruit', 'spanish', 'water melon', 'cotton candy grape', 123];
const fruit = 'dorian'

console.log("the index of ", fruit, "is", findFruitIndex(array, fruit))


function findFruitIndex2(array, item) {
    let index
    for (let i = 0; i < array.length; i++) {
        if (array[i] == item) {
            index = i
            return index
        }
    }


console.log(findFruitIndex2(array123, 'jackfruit'))

let shifting = array123.unshift("kiwi")
console.log(shifting)
console.log(array123)


let remove = array123.splice(3, 1)
console.log(array123)




