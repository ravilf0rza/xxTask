const employees = [
    {
        id: 1,
        name: 'Farman',
        age: 22,
        position: 'Frontend | Team Leader',
        salary: 250
    },
    {
        id: 2,
        name: 'Subhan',
        age: 22,
        position: 'Backend | Team Leader',
        salary: 250
    },
    {
        id: 3,
        name: 'Aqil',
        age: 27,
        position: 'QA Tester',
        salary: 70
    },
    {
        id: 4,
        name: 'Lala',
        age: 18,
        position: 'QA Tester',
        salary: 70
    },
    {
        id: 5,
        name: 'Oktay',
        age: 12,
        position: 'Frontend',
        salary: 160
    },
]

const employeesNames = employees.map (employee => employee.name)
const joinNames = employeesNames.join("-")
console.log(joinNames);
// 1. console.log(employees.length); // uzunlugu 5
// 4.const total = employees.push("id:6","name:Ravil","age:28","position:Expert","salary:222")
// console.log(employees);
// 7. const shifted = employees.shift(0)
// console.log(employees);
// 6. const popped = employees.pop(4)
// console.log(employees);
// 5. const arrayLenght = employees.unshift("Təcrübəçi",)
// console.log(employees);
// 9. const reversed = employees.reverse()
// console.log(reversed);
// 10. const Frontend = employees.some((employee) => employee.position.includes("Frontend"))
// console.log(Frontend);
// 11. const Frontend = employees.some((employee) => employee.position.includes("Frontend"))
// console.log(Frontend);
//  2. const lastName = employees.at(-1).name;
// console.log(lastName);
// 3. const lastName=employees[employees.length-1].name
// console.log(lastName);
// 12. const ages = employees.every(employee => employee.age < 18);
// console.log(ages);
// 13. const index = employees.findIndex(employee=>employee.position === 'Frontend | Team Leader')
// console.log(index);
// 14. const find = employees.find(employee => employee.position === 'Frontend | Team Leader')
// console.log(find);
// 15. const map = employees.map(employee => employee.age > 18)
// console.log(map);
// 16. const sum = employees.reduce((acc,value) =>{return acc+value.salary;},0);
// console.log(sum);
// // 8. const employeesNames = employees.map (employee => employee.name)
// const joinNames = employeesNames.join("-")
// console.log(joinNames);
