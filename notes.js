


function convertcCtoF(tempC) {
    return tempC * 1.8 + 32

}
    
function convertFtoC(tempF) {
    return (tempF -32) / 1.8
}

module.exports = {convertFtoC, convertcCtoF} 

//const convertCtof = require

const {convertFtoC, convertcCtoF} = require('./utils')

console.log('High today: ', todaysHigh + 'F°', convertFtoC(todaysHigh)+'c°')

const lowTemp = 23 
console.log('Low today:', convertFtoC(lowTemp) + '°F', lowTemp + 'C°')