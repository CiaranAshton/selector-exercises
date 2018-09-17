const { getProductsByBrand } = require('../lib/selectors');

describe('JT Vits', () => {
    describe('getProductsByBrand', () => {
        it('returns products grouped by brand (lodash/groupBy or reduce)', () => {
            const state = {
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
                    p006: {
                        id: 'p006',
                        name: 'JT Vits Iron 14mg – 60 Tablets',
                        brand: 'JT Vits',
                        price: 3.09,
                        rating: null,
                        inStock: true,
                    },
                    p007: {
                        id: 'p007',
                        name: 'JT Vits Magnesium 375mg – 180 Tablets',
                        brand: 'JT Vits',
                        price: 9.99,
                        rating: null,
                        inStock: true,
                    },
                },
            };

            expect(getProductsByBrand(state)).toEqual({
                Vitabiotics: [
                    {
                        id: 'p001',
                        name: 'Vitabiotics Feroglobin 200ml',
                        brand: 'Vitabiotics',
                        price: 4.19,
                        rating: { stars: 4.5, count: 21 },
                        inStock: true,
                    },
                    {
                        id: 'p005',
                        name: 'Vitabiotics Feroglobin - 30 Capsules',
                        brand: 'Vitabiotics',
                        price: 5.29,
                        rating: { stars: 4.5, count: 16 },
                        inStock: false,
                    },
                ],
                'JT Vits': [
                    {
                        id: 'p004',
                        name: 'JT Vits Re-Energise Orange 20 tablets',
                        brand: 'JT Vits',
                        price: 3.99,
                        rating: { stars: 4.5, count: 12 },
                        inStock: true,
                    },
                    {
                        id: 'p006',
                        name: 'JT Vits Iron 14mg – 60 Tablets',
                        brand: 'JT Vits',
                        price: 3.09,
                        rating: null,
                        inStock: true,
                    },
                    {
                        id: 'p007',
                        name: 'JT Vits Magnesium 375mg – 180 Tablets',
                        brand: 'JT Vits',
                        price: 9.99,
                        rating: null,
                        inStock: true,
                    },
                ],
                Floradix: [
                    {
                        id: 'p002',
                        name: 'Floradix Liquid iron and vitamin formula 500ml',
                        brand: 'Floradix',
                        price: 17.89,
                        rating: null,
                        inStock: false,
                    },
                ],
                Berocca: [
                    {
                        id: 'p003',
                        name: 'Berocca Orange - 45 effervescent tablets',
                        brand: 'Berocca',
                        price: 12.59,
                        rating: { stars: 5, count: 21 },
                        inStock: true,
                    },
                ],
            });
        });
    });
});
