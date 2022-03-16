function sumOfMinimums(arr) {
  return arr.reduce((p, c) => p + Math.min(...c), 0);
}