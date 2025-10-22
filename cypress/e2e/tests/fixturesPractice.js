import { assert } from 'chai';

describe('Fixture assessment practice', () => {
    it('Should verify cat data is able to be imported for test', () => {
        cy.visit('/')
        cy.fixture('animals.json').then((data) => {
            data.animals[2].cat = 'Sir Purr';
            cy.get(data)
        })
    })

    it('Should verify bird data is able to be imported for test', () => {
        cy.visit('/')
        cy.fixture('animals.json').then((data) => {
            data.animals[1].birds = {
                id: 'e6388490-72df-4c81-b125-103be706366d',
                bird: "Big Bird",
                createdAt: '2025-06-23T04:00:58.178Z'
            },
                cy.wrap(data.animals[1].birds).then((obj) => {
                    assert.propertyVal(obj, 'bird', 'Big Bird')
                })
        })
    })

    it('Should verify bear data is able to be imported for test', () => {
        cy.visit('/')
        cy.fixture('animals.json').then((data) => {
            data.animals[0].bears = {
                id: 'e2e3',
                bear: 'Freddy Fazbear',
                createdAt: '2025-06-23T04:00:58.178Z'
            },
                cy.wrap(data.animals[0].bears).then((obj) => {
                    assert.propertyVal(obj, 'bear', 'Freddy Fazbear')
                })
        })
    })

    it('Should verify pilots jpeg is able to be imported for test', () => {
        cy.fixture('pilots.jpeg', 'binary').then((fileContent) => {
            const blob = new Blob([fileContent], { type: 'image/jpeg' });
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onload = () => {
                const dataUrl = reader.result;
                cy.get(dataUrl).should('include', 'pilots.jpeg')
                console.log(dataUrl)
            };
        })
    })
})