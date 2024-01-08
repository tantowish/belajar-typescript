import { Employee, Manager } from "../src/employee"

describe('Extend Interface', function(){
    it("should support extend interface", function(){
        const darel: Employee = {
            id: "1",
            name:"eko",
            division: "IT"
        }

        const tanto: Manager = {
            id: "2",
            name: "Tanto",
            division: "IT",
            numberOfEmployees: 5
        }

        console.info(tanto)
    })
    it("should support function that extend interface", function(){
        const tanto: Person ={
            name: "tanto",
            sayHello: function(name: string): string {
                return `Hello ${name}, my name is ${this.name}`
            }
        }

        console.info(tanto.sayHello("Budi"))
    })
})