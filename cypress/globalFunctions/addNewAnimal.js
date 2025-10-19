import { faker } from '@faker-js/faker';
import fs from 'fs';

function addNewAnimal(method, url, animalType) {
    let animals = [];
    const newAnimalAdded = [];
    const newAnimal = {
        id: faker.string.uuid(),
        [animalType]: faker.animal.animals,
        createdAt: faker.date.past()
    }
    for (let i = 0; animals.length; i++) {
        if ([i] == 0) {
            animals == ('bear');
        } if ([i] == 1) {
            animals == 'bird';
        } if ([i] == 2) {
            animals == 'cat';
        }
        animals.push(animalType);
        return animalTypemyString.replace("'", "");
    }
    newAnimalAdded.push(newAnimal);
    addNewAnimal(newAnimalAdded);
    cy.intercept(method, url);
}

module.exports = new addNewAnimal();
