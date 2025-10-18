import { faker } from '@faker-js/faker';
import fs from 'fs';

function generateAnimals(numUsers) {
    const bears = [];
    const birds = [];
    const cats = [];
    const animals = [];
    for (let i = 0; i < numUsers; i++) {
        bears.push({
            id: faker.string.uuid(),
            bear: faker.animal.bear(),
            createdAt: faker.date.past()
        });
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
const bearData =
{
    bears: generateAnimals(20).filter(animal => animal.bears)
};
const birdData =
{
    birds: generateAnimals(20).filter(animal => animal.birds)
};
const catData =
{
    cats: generateAnimals(20).filter(animal => animal.cats),
};

fs.writeFileSync('bearData.json', JSON.stringify(bearData, null, 2));
fs.writeFileSync('birdData.json', JSON.stringify(birdData, null, 2));
fs.writeFileSync('catData.json', JSON.stringify(catData, null, 2));

console.log('db.json generated with fake data!');
