function zeros(n) {
  let _r = 0;
  while (n > 0) {
    n = ~~(n / 5);
    _r += n;
  }
  return _r;
}

console.log(zeros(10));

// var factorial = function (n) {
//   n = BigInt(n);
//   return n == 0n || n == 1n ? 1n : factorial(n - 1n) * n;
// };
// //can be print this way
// console.log(factorial(30));
