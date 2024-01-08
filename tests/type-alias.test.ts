import { Category, Product } from "../src/type-alias"

describe('Type Alias', function(){
    it('should support typescript', function(){
        const category: Category = {
            id: "2",
            name: "Tantow"
        }

        const product: Product = {
            id: "1",
            name: "Samsung A05s",
            price:2299000,
            category: category
        }

        console.info(category)
        console.info(product)
    })
})