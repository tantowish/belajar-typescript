describe('Interface Typescript', function () {
    it('Should support interface', function () {
        const seller = {
            id: 1,
            name: 'Toko Kelontong',
            nib: "2312312",
            npwp: "0231231"
        };
        seller.id = 2;
        console.info(seller);
    });
});
export {};
