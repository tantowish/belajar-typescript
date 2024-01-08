describe('Optional Parameter', function(){
    it('should support null and undefined', function(){
        function sayHello(name?: string| null){
            if(name){
                console.log(`Hello ${name}`)
            }
            else{
                console.log('Hello')
            }
        }
        
        sayHello("eko")
        const name: string | undefined = undefined
        sayHello(undefined)
        sayHello(null)
    })
})