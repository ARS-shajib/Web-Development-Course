const add = (num1, num2) => {
    return num1 + num2;
}


//reduce

const product = [
    { id: 1, name: 'alta', price: 25 },
    { id: 2, name: 'face mask', price: 250 },
    { id: 3, name: 'face wash', price: 259 },
    { id: 4, name: 'mascara', price: 587 },
    { id: 5, name: 'shampoo', price: 607 },
    { id: 6, name: 'conditioner', price: 507 },
]

const productReducer = (previous, current) => previous + current.price;

const productTotal = product.reduce(productReducer, 0)

console.log(productTotal);

export { add, productTotal }