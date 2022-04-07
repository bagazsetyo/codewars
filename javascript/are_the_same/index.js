function comp(array1, array2) {
    if (!array1 || !array2) return true;
    var arr1 = array1.sort();
    var arr2 = array2.map(function (item) {
        return Math.pow(item, 1 / 2);
    }).sort();
    return arr1.length === arr2.length && arr1.every(function (item, index) {
        return item === arr2[index];
    });
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]))