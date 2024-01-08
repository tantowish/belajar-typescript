describe('Function Interface', function(){
    it("Should suport function interface", function(){
        interface addFunction{
            (value1: number, value2: number):number
        }

        const add: addFunction = (val1: number, val2: number): number => {
            return val1 + val2
        }

        console.info(add(1,2))
    })
})