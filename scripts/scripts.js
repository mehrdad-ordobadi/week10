// for (let i= 0; i<11; i++) {
//     console.log(Math.pow(2,i));
// }
// let i = 0;
// while(i<11){
//     console.log(Math.pow(2,i));
//     i++
// }
// let greeting = "Welcome";
// let name;
// do{
//     name = prompt("Enter your name pls:");
// } while(!isNaN(Number(name)))
// // alert(greeting+' '+name+'!')
// alert(`Hello ${name}`);
// let fruits = ['Apple','Banana']
// fruits.push('Orange')
// fruits.unshift('Mango')
// for (let item of fruits){
//     console.log(item)
// }
// const person = {
//     name:['Bob', 'Smith'],
//     age:32,
//     gender:'male',
//     hobbies :['music', 'skiing']
// }
// let templ = `my name is ${person.name[0]} ${person.name[1]}. I am interested in ${person.hobbies[0]} and ${person.hobbies[1]}.`
// console.log(templ)
let student1 = {
    ID: "A00022",
    GPA: 3.0,
    program: "CIT"
};

let student2 = {
    ID: "A01000",
    GPA: 3.1,
    program: "CST"
};

let student3 = {
    ID: "A00114",
    GPA: 3.2,
    program: "CIT"
};
let students = [student1, student2, student3]; 
let counter = 0;
for (let item of students){
    if (item.program === 'CIT' && item.GPA > 3){
        counter++;
    }
}
console.log(counter)