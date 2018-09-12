const R = require('ramda');

module.exports = ({ products }, id) => R.or(products[id], null);
