const revrot = (str, sz) =>
  (str.match(new RegExp(`.{${sz}}`, `g`)) || []).map(val => val.replace(/[02468]/g, ``).length % 2 ? val.replace(/(.)(.+)/, `$2$1`) : [...val].reverse().join(``)).join(``);