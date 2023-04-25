const bottle = { color: 'yellow', hold: 'water', price: 50, isCleaned: true }

/*
for of // array
for in //object
*/

for (const property in bottle) {
    // console.log(property);
    // console.log(property, bottle[property]);
}

const keys = Object.keys(bottle);
for (const property of keys) {
    // console.log(property, bottle[property]);
}


// advanced
const entries = Object.entries(bottle);
// console.log(entries);
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}