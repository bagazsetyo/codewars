function unusedDigits(...args){
    var number = args.toString().replace(/,/g, '');
    var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var result = [];
    for (var i = 0; i < digits.length; i++) {
        if (number.indexOf(digits[i]) == -1) {
            result.push(digits[i]);
        }
    }
    var response = result.toString().replace(/,/g, '');
    return response;
}

console.log(unusedDigits(12, 34, 56, 78), "09");