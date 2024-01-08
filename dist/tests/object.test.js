"use strict";
describe('Object', function () {
    it('should support in typescript', function () {
        const person = {
            id: "1",
            name: "eko"
        };
        console.info(person);
        person.id = '2';
        person.name = "Tantowi Shah";
        console.info(person);
    });
});
