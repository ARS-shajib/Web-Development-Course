const student = {
    id: 1703025,
    name: 'Abdur Rahman',
    money: 5000,
    major: 'Computer',
    isRich: false,
    subjects: ['math', "computer", "business"],
    bestFriend: {
        name: 'disha',
        major: 'Computer'
    },
    takeExam: function () {
        console.log(this.name, 'taking name');
    },
    treatDey: function (expense) {
        this.money = this.money - expense;
        return this.money;
    }
}

student.takeExam();
const remain1 = student.treatDey(900);
const remain2 = student.treatDey(900);
console.log(remain1, remain2);