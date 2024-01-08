"use strict";
describe('Any', function () {
    it('should support in typescript', function () {
        const person = {
            id: 1,
            name: "Tantowi Shah Hanif",
            age: 30
        };
        person.age = 20;
        console.info(person);
    });
});
