const R = require('ramda');

// helpers
const refineProducts = R.pipe(
    R.map(R.pick(['id', 'name', 'price'])),
    R.values,
);

const uesProducts = ({ products }) => products;

const withSubtotal = R.curry((products, quantity, key) => ({
    id: products[key].id,
    name: products[key].name,
    quantity: quantity,
    subtotal: R.multiply(quantity, products[key].price),
}));

const withTotal = R.reduce((acc, { subtotal }) => R.add(acc, subtotal), 0);

const withCount = (products, brand) => ({
    brand,
    count: products.length,
});

// selectors
const getProducts = R.pipe(
    uesProducts,
    refineProducts,
);

const getProductsInStock = R.pipe(
    uesProducts,
    R.filter(R.prop('inStock')),
    refineProducts,
);

const getProduct = ({ products }, id) => R.or(products[id], null);

const getBasket = ({ basket, products }) =>
    R.pipe(
        R.mapObjIndexed(withSubtotal(products)),
        R.values,
    )(basket);

const getBasketTotal = R.pipe(
    getBasket,
    withTotal,
);

const getProductsByBrand = R.pipe(
    uesProducts,
    R.values,
    R.groupBy(R.prop('brand')),
);

const getBrands = R.pipe(
    getProductsByBrand,
    R.mapObjIndexed(withCount),
    R.values,
    R.sortBy(R.prop('brand')),
);

module.exports = {
    getProducts,
    getProductsInStock,
    getProduct,
    getBasket,
    getBasketTotal,
    getProductsByBrand,
    getBrands,
};
