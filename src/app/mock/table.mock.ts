import * as faker from 'faker';

const size = 100;
const mock = [];

for (let i = 0; i < size; i++) {
    const obj: MockObj = {
        name: faker.name.firstName(),
        lastname: faker.name.lastName(),
        birthdate: faker.date.past(),
        company: faker.company.companyName(),
        salary: faker.random.number({ min: 20000, max: 80000, precision: 2 })
    };
    mock.push(obj);
}

export interface MockObj { name: string, lastname: string, birthdate: Date, company: string, salary: number };
export default mock;