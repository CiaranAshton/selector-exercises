const { getBasket } = require('../lib/selectors');

describe('JT Vits', () => {
    describe('getBasket', () => {
        it('returns a list of products in the basket with their subtotals', () => {
            // new addition to the state tree: `basket`
            // - each key represents a product with the value
            //   representing the quantity of that product.

            const state = {
                basket: {
                    p002: 2,
                },
                products: {
                    p001: {
                        id: 'p001',
                        name: 'Vitabiotics Feroglobin 200ml',
                        brand: 'Vitabiotics',
                        price: 4.19,
                        rating: { stars: 4.5, count: 21 },
                        inStock: true,
                    },
                    p002: {
                        id: 'p002',
                        name: 'Floradix Liquid iron and vitamin formula 500ml',
                        brand: 'Floradix',
                        price: 17.89,
                        rating: null,
                        inStock: false,
                    },
                    p003: {
                        id: 'p003',
                        name: 'Berocca Orange - 45 effervescent tablets',
                        brand: 'Berocca',
                        price: 12.59,
                        rating: { stars: 5, count: 21 },
                        inStock: true,
                    },
                    p004: {
                        id: 'p004',
                        name: 'JT Vits Re-Energise Orange 20 tablets',
                        brand: 'JT Vits',
                        price: 3.99,
                        rating: { stars: 4.5, count: 12 },
                        inStock: true,
                    },
                    p005: {
                        id: 'p005',
                        name: 'Vitabiotics Feroglobin - 30 Capsules',
                        brand: 'Vitabiotics',
                        price: 5.29,
                        rating: { stars: 4.5, count: 16 },
                        inStock: false,
                    },
                },
            };

            expect(getBasket(state)).toEqual([
                {
                    id: 'p002',
                    name: 'Floradix Liquid iron and vitamin formula 500ml',
                    quantity: 2,
                    subtotal: 35.78,
                },
            ]);
        });
    });
});
