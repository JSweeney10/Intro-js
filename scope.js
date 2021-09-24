let globalVar = 'global variablel' //available everywhere 

function badFunction() {
    console.log('I am bad...') //global variable 
    console.log(globalVar)
    globalVar = 'oops i broke it'
    const functionVar = 'function variable'
    console.log(functionVar)
    }

console.log(globalVar)

badFunction()
console.log(globalVar)



