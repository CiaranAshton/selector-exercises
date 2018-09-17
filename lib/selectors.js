const R = require('ramda');

// helpers
const refineProducts = R.pipe(
    R.map(R.pick(['id', 'name', 'price'])),
    R.values,
);

const withSubtotal = products => (quantity, key) => ({
    id: products[key].id,
    name: products[key].name,
    quantity: quantity,
    subtotal: R.multiply(quantity, products[key].price),
});

const getTotal = R.reduce((acc, item) => R.add(acc, item.subtotal), 0);

const withCount = (products, brand) => ({
    brand,
    count: products.length,
});

// selectors
const getProducts = ({ products }) => refineProducts(products);

const getProductsInStock = ({ products }) =>
    R.pipe(
        R.filter(R.prop('inStock')),
        refineProducts,
    )(products);

const getProduct = ({ products }, id) => R.or(products[id], null);

const getBasket = ({ basket, products }) =>
    R.pipe(
        R.mapObjIndexed(withSubtotal(products)),
        R.values,
    )(basket);

const getBasketTotal = R.pipe(
    getBasket,
    getTotal,
);

const getProductsByBrand = ({ products }) =>
    R.pipe(
        R.values,
        R.groupBy(R.prop('brand')),
    )(products);

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
