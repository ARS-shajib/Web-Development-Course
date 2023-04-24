function double(first, second) {
    if (first == second) {
        console.log('condition is true');
    }
    else {
        console.log('condition is false');
    }
}
function triple(first, second) {
    if (first === second) {
        console.log('condition is true');
    }
    else {
        console.log('condition is false');
    }
}

let first = 2;
let second = '2';

double(first, second); //true(check only value)
triple(first, second); //false(check value and data type)
//----------------------------
first = '1';
second = true;

double(first, second);
//-----non-primitive----------
first = { name: 'ali' };
second = { name: 'ali' };

double(first, second);
//----------------------------

first = [3, 4];
second = [3, 4];

double(first, second);