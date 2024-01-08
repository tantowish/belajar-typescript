describe('Array', function(){
    it('should same with javascript', function(){
        const names: String[] = ['Tantows', "Ahmad", "Ilyasa"]
        const values: number[] = [1,2,3]

        console.info(names)
        console.info(values)
    })

    it('should support readonly array', function(){
        const hobbies: ReadonlyArray<string> = ['Mengoding', 'Menari']
        console.info(hobbies)
    })

    it('should support tuple', function(){
        const person: readonly [string, string, number] = ["Tantows", "Tantows001", 3]
        console.info(person[0])
        console.info(person[1])
        console.info(person[2])
    })
})