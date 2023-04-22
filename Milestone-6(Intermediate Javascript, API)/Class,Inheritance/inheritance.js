class TeamMember {
    name;
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}
class Support extends TeamMember {
    groupSupportTime;
    designation = 'Support Web Dev';
    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

class StudentCare extends TeamMember {
    designation = 'Student Care Web Dev';

    buildARoutine(student) {
        console.log(this.name, 'build a routine for', student);
    }
}
class NeptuneDev extends TeamMember {
    designation = 'Neptune Dev';
    codeEditor;
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }

    releaseApp(version) {
        console.log(this.name, 'release app version', version);
    }
}

const aamir = new Support('amir khan', 'india', 11);
const solaiman = new Support('solaiman', 'dubai', 4);
const solaimanKhan = new StudentCare('solaiman khan', 'BD');
const solaimanAllHasan = new NeptuneDev('solaiman all hasan', 'USA', 'Android Studio');

solaimanAllHasan.releaseApp(1.4);

aamir.startSession();
console.log(aamir);
console.log(solaiman);
console.log(solaimanKhan);
console.log(solaimanAllHasan);