///<reference types='cypress'/>
import { faker } from '@faker-js/faker';
import fs from 'fs';

function generateAnimals(numAnimals) {
    const bears = [];
    const birds = [];
    const cats = [];
    const animals = [];
    for (let i = 0; i < numAnimals; i++) {
        bears.push({
            id: faker.string.uuid(),
            bear: faker.animal.bear(),
            createdAt: faker.date.past()
        }),
        animals.push({ bears: bears[i] });
        birds.push({
            id: faker.string.uuid(),
            bird: faker.animal.bird(),
            createdAt: faker.date.past()
        }),
            animals.push({ birds: birds[i] });
        cats.push({
            id: faker.string.uuid(),
            cat: faker.animal.cat(),
            createdAt: faker.date.past()
        }),
            animals.push({ cats: cats[i] });
    }
    return (animals);
}


// Generate 60 animals (20 bears, 20 birds, 20 cats)
// Add other data types as needed, e.g., dogs, fish, etc.
const animalData =
{
    animals: generateAnimals(20)
};
// Commented out these variables, but they can be used to separate the json data 
// instead of putting it into one file

// const allBears = {
//     allBears: generateAnimals(20)
// }
// const birdData =
// {
//     allBirds: generateAnimals(20)
// };
// const catData =
// {
//     allCats: generateAnimals(20)
// };

fs.writeFileSync('animal.json', JSON.stringify(animalData, null, 2));
// Commented out for the same reason as above variables 

// fs.writeFileSync('birdData.json', JSON.stringify(birdData, null, 2));
// fs.writeFileSync('catData.json', JSON.stringify(catData, null, 2));

console.log('db.json generated with fake data!');

module.exports = generateAnimals();
