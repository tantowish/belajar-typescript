"use strict";
describe('Optional Parameter', function () {
    it('should support null and undefined', function () {
        function sayHello(name) {
            if (name) {
                console.log(`Hello ${name}`);
            }
            else {
                console.log('Hello');
            }
        }
        sayHello("eko");
        const name = undefined;
        sayHello(undefined);
        sayHello(null);
    });
});
