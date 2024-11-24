const parse = data =>
  [...data].reduce(([a, b], val) => val === `i` ? [++a, b] : val === `d` ? [--a, b] : val === `s` ? [a ** 2, b] : val === `o` ? [a, [...b, a]] : [a, b], [0, []])[1];