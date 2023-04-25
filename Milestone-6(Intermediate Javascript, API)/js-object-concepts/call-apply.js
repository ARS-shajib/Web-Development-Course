const kibria = {
    id: 101,
    money: 5000,
    name: 'RJ Kibria',
    treatDey: function (expense, boksis, tax) {
        this.money = this.money - expense - boksis - tax;
        console.log(this);
        return this.money;
    }
}

const heroBalam = {
    id: 102,
    money: 6000,
    name: 'Hero Balam'
}
const normalGolam = {
    id: 103,
    money: 7000,
    name: 'normal Golam'
}

//call
//kibria.treatDey.call(heroBalam, 500, 100, 50);
//kibria.treatDey.call(heroBalam, 300, 30, 20);

//apply
kibria.treatDey.apply(heroBalam, [500, 100, 50]);
kibria.treatDey.apply(heroBalam, [300, 30, 20]);

kibria.treatDey.apply(normalGolam, [600, 120, 80]);