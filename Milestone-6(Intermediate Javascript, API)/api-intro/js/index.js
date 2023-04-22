// javascript object notation
//JSON

const user = { id: 11, name: 'Abdur Rahman', job: 'identity crisis' };

const stringified = JSON.stringify(user);

console.log(user);
console.log(stringified);

const shop = {
    name: 'disha store',
    address: 'USA',
    profit: 150000,
    owner: {
        name: 'disha',
        profession: 'Engineer'
    },
    products: ['laptop', 'mobile', 'charger'],
    isExpensive: false
}

const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);