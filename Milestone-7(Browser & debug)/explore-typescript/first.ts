const number = 3.25;
const Name = 'Abdur Rahman';
console.log('Hi! I am ', Name, 'I need CGPA ', number);

let money: number = 88;
let honey: string = 'I love disha a lot';

console.log(money, honey);


function add(first: number, second: number): number {
    const result = first + second;
    return result;
}

const output: number = add(45, 87);
//-----------------------------------------------------------

const salary: number[] = [25, 30];
const friend: string[] = ['adam', 'eve'];

salary.push(50);
friend.push('shajib');
//-----------------------------------------------------------
// custom type
type Person = {
    name: string,
    age: number,
    salary: number
}

const student: Person = {
    name: 'Abdur Rahman',
    age: 24,
    salary: 6000
}

const employee: { name: string, age: number, salary: number } = {
    name: 'Abdur Rahman',
    age: 24,
    salary: 6000
}

// arrow function

function add1(num1: number, num2: number): number {
    return num1 + num2;
}

const add2 = (num1: number, num2: number): number => { return num1 + num2 };
const add3 = (num1: number, num2: number): number => num1 + num2;

