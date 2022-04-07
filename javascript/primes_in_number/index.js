function primeFactors(n) {

    var division = 2;
    var number = n;
    var value = [];

    while (true) {
        if (number % division === 0) {
            value.push(division);
            number /= division;
            division = 2;
        } else {
            division++;
        }

        if (number === 1) {
            break;
        }
    }

    var counts = {};
    value.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

    var total = "";
    Object.entries(counts).forEach((element, index) => {
        if (element[1] > 1) {
            total += "(" + element[0] + "**" + element[1] + ")";
        } else {
            total += "(" + element[0] + ")";
        }
    });

    return total;
}

// console.log(primeFactors(44972))
console.log(primeFactors(7775460))
// console.log(44972/ 2)
// console.log(22486/ 2)
// console.log(11243/ 39)
// console.log(215985/ 3)
// console.log(7199/ 23)
// console.log(313/ 9)
