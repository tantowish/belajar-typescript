describe('Union type', function(){
    it("Should support union type", function(){
        let sample: number | string | boolean = "eko"
        sample = 100
        sample = true

        console.info(sample)
    })

    it("should support check typeof union", function(){
        function process(value: number | string | boolean){
            if(typeof value === "string"){
                return value.toUpperCase()
            }
            else if(typeof value === "number"){
                return value+2
            }
            else{
                return !value
            }
        }

        expect(process("Eko")).toBe("EKO")
        expect(process(100)).toBe(102)
        expect(process(true)).toBe(false)
    })
})