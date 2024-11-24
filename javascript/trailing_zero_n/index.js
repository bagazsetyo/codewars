function zeros(n) {
  let divider = 1;
  let sum = 0;

  while (divider <= n) {
    sum = Math.floor(sum + n / (divider *= 5));
  }
  return sum;
}

// console.log(zeros(0), 0, "Testing with n = 0");
// console.log(zeros(4), 1, "Testing with n = 5");
// console.log(zeros(6), 1, "Testing with n = 6");
console.log(zeros(30), 7, "Testing with n = 30");
