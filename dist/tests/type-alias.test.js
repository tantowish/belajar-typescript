describe('Type Alias', function () {
    it('should support typescript', function () {
        const category = {
            id: "2",
            name: "Tantow"
        };
        const product = {
            id: "1",
            name: "Samsung A05s",
            price: 2299000,
            category: category
        };
        console.info(category);
        console.info(product);
    });
});
export {};
