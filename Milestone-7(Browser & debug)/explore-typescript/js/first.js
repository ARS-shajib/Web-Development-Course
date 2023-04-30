"use strict";
const number = 3.25;
const Name = 'Abdur Rahman';
console.log('Hi! I am ', Name, 'I need CGPA ', number);
let money = 88;
let honey = 'I love disha a lot';
console.log(money, honey);
function add(first, second) {
    const result = first + second;
    return result;
}
const output = add(45, 87);
//-----------------------------------------------------------
const salary = [25, 30];
const friend = ['adam', 'eve'];
salary.push(50);
friend.push('shajib');
const student = {
    name: 'Abdur Rahman',
    age: 24,
    salary: 6000
};
const employee = {
    name: 'Abdur Rahman',
    age: 24,
    salary: 6000
};
// arrow function
function add1(num1, num2) {
    return num1 + num2;
}
const add2 = (num1, num2) => { return num1 + num2; };
const add3 = (num1, num2) => num1 + num2;
