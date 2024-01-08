import { Customer, CustomerType } from "../src/type-enum"

describe("Enum check", function(){
    it("should support typescript enum", function(){
        const customer: Customer = {
            id: 1,
            name: 'Tanto',
            type: CustomerType.GOLD
        }

        console.info(customer)
    })
})