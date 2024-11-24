function selReverse(array, length) {
  function reverse(from = 0, end = length, acc = []) {
      acc = acc.concat(
          array.slice(from, end).reverse()  
      );
      return end >= array.length
          ? acc
          : reverse(from+length, end+length, acc)
  }
  return length <= 0 ? array : reverse();
}