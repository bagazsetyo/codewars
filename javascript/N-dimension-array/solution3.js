const createNDimensionalArray = (n, s, t = 'level ' + n) => {
    return Array(s).fill(n === 1 ? t : createNDimensionalArray(n - 1, s, t));
}