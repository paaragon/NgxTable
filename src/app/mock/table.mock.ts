import * as faker from 'faker';

const size = 100;
const mock = [
    { name: 'Delbert', lastname: 'Keeling', birthdate: new Date(1990, 1, 21), company: 'Gislason, Braun and Kerluke', salary: 30432 },
    { name: 'Karine', lastname: 'Rice', birthdate: new Date(1982, 3, 1), company: 'Thiel - Connelly', salary: 29188 },
    { name: 'Rachelle', lastname: 'Flatley', birthdate: new Date(1985, 10, 16), company: 'Bradtke, Donnelly and Gottlieb', salary: 27026 },
    { name: 'Gardner', lastname: 'Lindgren', birthdate: new Date(1982, 9, 20), company: 'Crist - Klein', salary: 52676 }
];

// for (let i = 0; i < size; i++) {
//     const obj: MockObj = {
//         name: faker.name.firstName(),
//         lastname: faker.name.lastName(),
//         birthdate: faker.date.past(),
//         company: faker.company.companyName(),
//         salary: faker.random.number({ min: 20000, max: 80000, precision: 2 })
//     };
//     mock.push(obj);
// }

export interface MockObj { name: string, lastname: string, birthdate: Date, company: string, salary: number };
export default mock;