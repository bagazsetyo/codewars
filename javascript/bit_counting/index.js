function countBits(str) {
    // convert hex to binary
    var bin = parseInt(str).toString(2);
    // count the number of 1's
    var count = (bin.match(/1/g) || []).length;
    return count;
}

console.log(countBits('10'));

console.log(countBits(0), 0);
console.log(countBits(4), 1);
console.log(countBits(7), 3);
console.log(countBits(9), 2);
console.log(countBits(10), 2);