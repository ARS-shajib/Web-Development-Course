// 1.using object literal
const student = { name: 'Abdur Rahman Shajib', wife: 'Disha' };

// 2.constructor
const person = new Object();
// console.log(person);

// 3.
const shajib = Object.create(student);
// console.log(shajib.wife);

// 4.
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const peop = new People('Shajib', 24);
// console.log(peop);

//function 

function Human(name) {
    this.name = name;
}

const man = new Human('Shajib');
console.log(man);
