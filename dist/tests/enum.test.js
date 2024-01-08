import { CustomerType } from "../src/type-enum";
describe("Enum check", function () {
    it("should support typescript enum", function () {
        const customer = {
            id: 1,
            name: 'Tanto',
            type: CustomerType.GOLD
        };
        console.info(customer);
    });
});
