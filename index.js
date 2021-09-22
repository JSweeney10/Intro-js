function findMaxNumber(arr) {
    let biggestNum = arr[0] //set initially to first num of array 
    for (let num of arr) { //loop through each number of array
        if (num > biggestNum) {
            biggestNum = num
        }
    }
    console.log(biggestNum)
}

findMaxNumber([1,2,3,5,6,8,1,7])

const ages = [37,48,30,22,17,25,19,24,21,20,27,32,33,45,]

findMaxNumber(ages)

