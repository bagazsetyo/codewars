const dotCalculator = (equation) => {
  const result = {
    '+' : (a, b) => a + b,
    '-' : (a, b) => a - b,
    '*' : (a, b) => a * b,
    '//': (a, b) => a / b,
  };
  const [a, action, b] = equation.split(' ');
  return '.'.repeat( result[action](a.length, b.length) );
}