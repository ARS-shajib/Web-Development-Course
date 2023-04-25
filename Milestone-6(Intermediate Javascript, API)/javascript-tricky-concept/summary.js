const nums = [23, 12, 56, 28];
// console.log(typeof nums);
// everything without primitive type is object in javascript.
function triple(x, y, z) {
    x = 111;
    y = 2222;
    z = 33;
}
// console.log(typeof triple);
// console.log(typeof null);
// console.log(triple.length);

let x = 1, y = 2, z = 4;
triple(x, y, z);
console.log(x, y, z);



function triplee(x, y, z) {
    x.age = 111;
}
const myobj = { name: 'shajib', age: 24 }
triplee(myobj); //pass by reference(for object).
console.log(myobj);