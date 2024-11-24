function selReverse(array, length) {
    if (length == 0) return array;
    let result = [];
    for(let i = 0; i < array.length; i += length) {
      result.push(...array.slice(i, i+length).reverse());
    }
    return result;
  }