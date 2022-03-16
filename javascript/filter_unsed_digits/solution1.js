function unusedDigits(...ints) {
  let flatInts = ints.reduce((p, c) => p.concat(("" + c).split('').map(Number)), []);
  return [0,1,2,3,4,5,6,7,8,9].filter(v => flatInts.indexOf(v) == -1).join('');
}