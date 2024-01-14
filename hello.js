// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');
const add = require('./add');

module.exports = async function (params, context) {
  console.log('Received params:', params);
  console.log('test3412132123');
  console.log(process.env);
  return {
    sum: add(1, 2),
    message: 'Hi, AirCode.',
  };
};
