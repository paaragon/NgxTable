import * as faker from 'faker';

const size = 20;
const mock = [];

for (let i = 0; i < size; i++) {
    const obj: MockObj = {
        id: faker.random.number({ min: 100, max: 1000 }),
        name: faker.name.firstName(),
        lastname: faker.name.lastName(),
        birthdate: faker.date.past(),
        company: faker.company.companyName(),
        salary: faker.random.number({ min: 20000, max: 80000, precision: 2 })
    };
    mock.push(obj);
}

export interface MockObj { id: number, name: string; lastname: string; birthdate: Date; company: string; salary: number; }
export default mock;
