function stopwatch() {
    let counter = 0;
    return function () {
        counter++;
        return counter;
    }
}

let clock1 = stopwatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
let clock2 = stopwatch();
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock2());