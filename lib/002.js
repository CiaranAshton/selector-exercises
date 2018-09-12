const R = require('ramda');

module.exports = ({ products }) =>
    R.pipe(
        R.filter(R.prop('inStock')),
        R.map(R.pick(['id', 'name', 'price'])),
        R.values,
    )(products);
