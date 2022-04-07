function grid(n, value = []) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    if (n == 0) {
        return ''
    } else if (n < 0) {
        return null;
    };

    if (alphabet.length < n * 2) {
        var s = Math.ceil(n * 2 / alphabet.length);
        alphabet = alphabet.repeat(s);
    }

    for (let i = 0; i < n; i++) {
        value.push(alphabet.slice(i, n + i).split('').join(' '));

    }
    return value.join('\n');
}

// console.log(grid(0));
// console.log(grid(1));
console.log(grid(20));

//a b
//b c

// console.log(grid(4));
// console.log(grid(6));