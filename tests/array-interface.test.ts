describe('Indexable Interface', function(){
    it("Should suport indexable interface", function(){
        interface stringArray{
            [index: number]: string
        }

        const names: stringArray = ["Tantowi", "Sira", "Ilyasa"]
        console.info(names)
    })
    it('should support indexable interface for non number index', function(){
        interface stringDictionary{
            [key: string]: string
        }

        const dict: stringDictionary = {
            name: "Tanto",
            address: "Sekayu"
        }

        expect(dict["name"]).toBe("Tanto")
        expect(dict["address"]).toBe("Sekayu")
    })
})