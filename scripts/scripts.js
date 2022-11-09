// for (let i= 0; i<11; i++) {
//     console.log(Math.pow(2,i));
// }
// let i = 0;
// while(i<11){
//     console.log(Math.pow(2,i));
//     i++
// }
let greeting = "Welcome";
let name;

do{
    name = prompt("Enter your name pls:");

} while(!isNaN(Number(name)))
// alert(greeting+' '+name+'!')
alert(`Hello ${name}`);