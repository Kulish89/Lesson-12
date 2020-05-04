    
let arr = [   
        student = {
            firstName: "Alex",
            lastName: "Alexeev",
            age: 25,
            grades: [2, 4, 5, 2, 5],
            course: 3,
            gender: "male",
        },
        student = {
            firstName: "Ivan",
            lastName: "Ivanov",
            age: 24,
            grades: [2, 2, 5, 2, 3],
            course: 3,
            gender: "male",
        },
        student = {
            firstName: "Peter",
            lastName: "Petrov",
            age: 25,
            grades: [2, 4, 5, 2, 5],
            course: 2,
            gender: "male",
        },
        student = {
            firstName: "Tnya",
            lastName: "Petrova",
            age: 24,
            grades: [4, 2, 2, 2, 2],
            course: 2,
            gender: "female",
        },
        student = {
            firstName: "Aleksandr",
            lastName: "Aleksandrov",
            age: 27,
            grades: [2, 4, 3, 2, 5],
            course: 5,
            gender: "male",
        },
        student = {
            firstName: "Sidr",
            lastName: "Sidorov",
            age: 27,
            grades: [2, 4, 3, 2, 3],
            course: 5,
            gender: "male",
        },
        student = {
            firstName: "Valentina",
            lastName: "Sidorova",
            age: 24,
            grades: [2, 2, 2, 3, 4],
            course: 3,
            gender: "female",
        },
        student = {
            firstName: "Vova",
            lastName: "Putin",
            age: 17,
            grades: [1, 3, 2, 5, 1],
            course: 1,
            gender: "male",
        },
        student = {
            firstName: "Dmitry",
            lastName: "Dmitriev",
            age: 18,
            grades: [2, 3, 2, 4, 2],
            course: 1,
            gender: "male",
        },
        student = {
            firstName: "Nikolay",
            lastName: "Nikolaev",
            age: 19,
            grades: [2, 2, 4, 3, 2],
            course: 1,
            gender: "male",
        },
        student = {
            firstName: "Elena",
            lastName: "Nikolaeva",
            age: 23,
            grades: [3, 5, 4, 5, 4],
            course: 3,
            gender: "female",
        },
] ;

for (let i = 0; i<arr.length; i++) {
    let tmp = arr[i].grades;
    let sum = 0;
    for (let j = 0; j < tmp.length; j++) {
    sum += tmp[j];
    }
    let average = sum / tmp.length;
    console.log(average);
    if (average <= 3 && student.gender == "male" && age >=18) {
        arr.isReadyForArmy = true;
        delete arr.grades;
        delete arr.course;
    } 
        else {
        arr.isReadyForArmy = false}
console.log (arr.isReadyForArmy);  
}; 
let army = [];
for (isReadyForArmy in student) {
    if (isReadyForArmy = true) {
    army.push(student)
    }    
};
    
console.log (army);










