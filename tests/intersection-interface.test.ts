import { HasId, HasName } from "../src/intersection"

describe('Intersection Interface', function(){
    it("Should support intersection interface", function(){
        type Domain = HasId & HasName

        const doma: Domain = {
            id: "1",
            name: "Tanto"
        }
        console.info(doma)
    })

    it("should support type assertion", function(){
        const person: any = {
            name: "Tanto",
            age: 30
        }

        const person2: Person = person as Person
        

        console.info(person2)
        console.info(typeof person2)
    })
})