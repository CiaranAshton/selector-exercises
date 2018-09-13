const R = require('ramda');

const refineProducts = R.pipe(
    R.map(R.pick(['id', 'name', 'price'])),
    R.values,
);

const getProducts = ({ products }) => refineProducts(products);

module.exports = {
    refineProducts,
    getProducts,
};
