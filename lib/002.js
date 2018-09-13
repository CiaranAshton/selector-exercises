const R = require('ramda');
const { refineProducts } = require('./001.js');

module.exports = ({ products }) =>
    R.pipe(
        R.filter(R.prop('inStock')),
        refineProducts,
    )(products);
