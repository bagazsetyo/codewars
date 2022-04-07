const createNDimensionalArray = (n, s) => {
    let arr = Array(s).fill(`level ${n}`)
    for (let i = 1; i < n; i++) arr = Array(s).fill(arr)
    return arr
}