const bottle = { color: 'yellow', hold: 'water', price: 50, isCleaned: true }

//getting all properties names

const keys = Object.keys(bottle);
// console.log(keys);

//get all values
const values = Object.values(bottle);
// console.log(values);

const pairs = Object.entries(bottle);
// console.log(pairs);

delete bottle.isCleaned;
console.log(bottle);

// Object.seal(bottle); // properties can not delete or add but value can be change.
Object.freeze(bottle); // properties can not delete or add and value can not be change also.
bottle.price = 100;
delete bottle.hold;
console.log(bottle);