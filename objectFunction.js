const students = [{
    name: 'Alina',
    lastname: 'Maliuk',
    age: 33,
    gender: 'female',
}, {
    name: 'dariel',
    lastname: 'Mera',
    age: 32,
    gender: 'male',
}, {
    name: 'krystopher',
    lastname:'Gil',
    age: 30,
    gender: 'male',
}, {
    male: 'john',
    lastname: 'sweeney', 
    age: '19',
    gender: 'male',
}



function returnFullName(person) {
    const fullName = '${person.firstName}' ${person.lastName}'
    console.log(fullName)
}


for(let i = 0; i < students.length; i ++) {
returnsFullName(students[i])
}

