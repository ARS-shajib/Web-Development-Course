class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

const aamir = new Support('amir khan', 'india');
const solaiman = new Support('solaiman', 'dubai');
aamir.startSession();
console.log(aamir);
console.log(solaiman);