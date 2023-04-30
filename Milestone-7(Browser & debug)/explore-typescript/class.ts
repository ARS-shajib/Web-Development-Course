class Car {
    model: string;
    price: number;
    private _milage: number;

    constructor(model: string, price: number,) {
        this.model = model;
        this.price = price;
        this._milage = 100000;
    }

    getActualMilage(): number {
        const realMilage = this._milage + 50000;
        return realMilage;
    }

    getTotalPrice(tax: number): number {
        const taxAmount = this.price * tax / 100;
        const total = this.price + taxAmount;

        return total;
    }
}

const toyota = new Car('toyota', 100000);
const totalPrice: number = toyota.getTotalPrice(25);
console.log(totalPrice);