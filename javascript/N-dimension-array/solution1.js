const createNDimensionalArray = (depth, size) => {
    let deep = Array(size).fill(`level ${depth}`);
    if (depth === 1) return deep;
    for (let i = 1; i < depth; i += 1) {
        deep = Array(size).fill(deep);
    }

    return deep;
}