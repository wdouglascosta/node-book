import { request } from 'https';

describe('Routes: Products', () => {
    const defaultProduct = {
        name: 'Produto Padrão',
        description: 'Descrição do produto',
        price: 100
    };
console.log('ooooooooooi '+request);
    describe('GET /products', () => {
        it('deve retornar uma lista de produtos', done => {
            request
            .get('/product')
            .end((err, res) => {
                expect(res.body[0]).to.eql(defaultProduct);
                done(err);
            })
        });
    });
});