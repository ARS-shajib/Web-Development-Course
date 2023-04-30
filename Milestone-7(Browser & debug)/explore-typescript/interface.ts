interface Player {
    name: string,
    club: string,
    salary: number,
    wife?: string,
    previousClubs?: string[]
}

const shajib: Player = {
    name: 'Abdur Rahman',
    club: 'RUET',
    salary: 6000,
    wife: 'disha'
}
const sagor: Player = {
    name: 'sagor',
    club: 'RUET',
    salary: 7000
}

interface Employee {
    name: string,
    designation: string,
    salary: number,
    age: number
}

interface Developer extends Employee {
    language: string,
    codeEditor: string,
    typingSpeed: number
}

const zuku: Developer = {
    name: 'Mark zukarburg',
    designation: 'ceo',
    salary: 10000000000000,
    age: 31,
    language: 'english',
    codeEditor: 'VS code',
    typingSpeed: 50
}