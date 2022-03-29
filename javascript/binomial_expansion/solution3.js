const pascalsTriangle = rows => {
  const res = [];
  let lvl = [1];
  while (rows--) {
    res.push(lvl);
    const tmp = [...lvl, 0];
    for (let i = tmp.length - 1; i > 0; --i) {
      tmp[i] += tmp[i-1]
    }
    lvl = tmp;
  }
  return res;
};

const expand = expr => {
  const [exp, am, x, bm, nm] = expr.match(/\((\-?\d*)(\w)([\+\-]\d+)\)\^(\d+)/);
  const a = am === '-' ? -1 : am === '' ? 1 : +am;
  const [b, n] = [+bm, +nm];
  const mul = pascalsTriangle(n + 1).pop();
  return mul.map((m, i, arr) => {
    const j = arr.length - i - 1;
    const mul = a**j * b**i * m;
    const amul = Math.abs(mul);
    const pow = `${j===0?'':x}${j>1?`^${j}`:''}`;
    return mul === 0 ? '' : `${amul===1&&pow!==''?(mul===1?'':'-'):mul}${pow}`;
  }).reduce((str, el) => {
    if (el === '') return str;
    return `${str}${el[0] === '-' ? '' : '+'}${el}`;
  });
};