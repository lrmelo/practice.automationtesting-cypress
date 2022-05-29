const { faker } = require('@faker-js/faker');

export class RegisterDataFactory {
    generate() {
        const name = faker.name.firstName();
        const data = {
            firstName: name,
            lastName: faker.name.lastName(),
            email: faker.internet.email(name),
            password: faker.internet.password(20)
        };

        return data;
    };
}