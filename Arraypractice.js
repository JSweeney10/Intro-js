const students = ['John', 'Alina', 'Max', 'Manny', 'Amir', 'Sebass',
    { instructors: ['Vitoria', 'todd', 'Darie', 'Daniel']}]



students.push('John')// adds to the end
students.shift('khrystopher') //removes the first one 
students.unshift('khrystopher') // adds at the beggining

const amount = students.length

console.log(students)

function whatever() //this is how we call a funtion


function addtoArray(newstudents){
    students.push(newstudents)

    console.log(students)
}

addtoArray('Emily')



