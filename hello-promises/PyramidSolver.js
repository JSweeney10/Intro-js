const pyramidSolver = (rowcount, print) => {
    return new promise ((resolve, reject) => {
        if(rowcount || print)

    reject("row count and.or print not provided.") {
        resolve ({rowcount, print})
        // const input = ("Row count and/or print not provided.")
    }
    pyramidSolver(10, "@")

//     .then(({rowcount, print}) => halfPyramidSolver(rowcount, print))

//     let row = print
//     console.log(row)
//     row += print

//     return rowcount
//     .then( result => halfPyramidSolver2(res))
//     .then( newRowCount =>)

//     const minMax = arr => {
//         if(!arr || arr.length === 0) {
//             throw new Error(" Invalid array")
//         }

//         let min = math.min(...arr)
//         let max = math.min(...arr)

//         return {min, max}
//     }
//     // arr = null
//     // arr = undefined

// pyramidSolver(10, "@")
// .then(({recount, print })

const halfPyramidSolver = (rowCount, print) => {
  for (let i = 0; i < rowCount; i++) {
    let row = "";
    for (let j = 0; j < i + 1; j++) {
      row += print;
    }
    console.log(row);
  }

  return rowCount * 2;
};

const halfPyramidSolver2 = (rowCount, print) => {
  let row = print;
  for (let i = 0; i < rowCount; i++) {
    console.log(row);
    row += print;
  }
  return rowCount;
};
return Promise;

// halfPyramidSolver(10, "@")
// .then(({rowcount, print}) => halfPyramidSolver(rowcount, print))
// then(newRowcount => halfPyramidSolver2(rowcount, "#"))

// .catch((error) => {
//     console.log("oh NO", Error)
// })

const nicePyramidSolver = async (rowCount, print) => {
    
    try {
         let res = await pyramidSolver(rowCount, print)
 
         if(!res){
             console.error("Something went horribly wrong")
         }
 
         //console.log(res)
 
         let newCount = await halfPyramidSolver(res.rowcount, res.print)
 
         let finalCount  = halfPyramidSolver2(newCount)
 
         console.log(finalCount);
     } catch (error) {
         console.log("Oh No no no no no.", error)
     }
 
 }
 
 nicePyramidSolver(5, "#")
 
