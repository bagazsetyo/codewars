const {BigInteger} = require('bignumber');

function multiply(a, b) {
  return new BigInteger(a).multiply(new BigInteger(b)).toString();
}