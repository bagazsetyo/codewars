function binary(str) {
    var bin = str.toString().split('').map(function (x) {
        var bit = parseInt(x).toString(2);
        return "0000".substring(bit.length) + bit;
    });

    return bin.join('');
}

// console.log(binary('10'));

// console.log(binary(14), 0);
// console.log(binary(41), 1);
// console.log(binary(7), 3);
// console.log(binary(9), 2);
// console.log(binary(10), 2);