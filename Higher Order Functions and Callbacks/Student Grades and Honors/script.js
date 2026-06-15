const students = [
    { name: "Alice", grades: [90, 85, 88] },
    { name: "Bob", grades: [70, 75, 72] },
    { name: "Charlie", grades: [95, 96, 94] },
    { name: "Diana", grades: [88, 90, 85] },
    { name: "Eve", grades: [60, 65, 70] }
];

function getAverage(student){
    let sum = student.grades.reduce((prev,curr) => prev + curr, 0);
    return sum/student.grades.length;
}

function sortByAverage(student1, student2){
    return getAverage(student2) - getAverage(student1);
}

let topStudents = students.filter(student => getAverage(student) >= 85).sort(sortByAverage);

let hasHonors = topStudents.some(student => getAverage(student) >= 95);

console.log(topStudents);
console.log(hasHonors);


