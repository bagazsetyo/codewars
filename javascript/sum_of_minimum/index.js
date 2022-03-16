function sumOfMinimums(arr) {
//   return arr;
    let sum = [];
    arr.map((item, index) => {
        let min = Math.min(...item);
        sum.push(min);
    })
    return sum.reduce((a, b) => a+b);
}

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]), 9);