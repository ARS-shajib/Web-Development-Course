"use strict";
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
        this._milage = 100000;
    }
    getActualMilage() {
        const realMilage = this._milage + 50000;
        return realMilage;
    }
    getTotalPrice(tax) {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;
        return total;
    }
}
const toyota = new Car('toyota', 100000);
const totalPrice = toyota.getTotalPrice(25);
console.log(totalPrice);
