function incrementString(strng) {
    var [string, number] = strng.split(/(\d+)/).filter((value) => value);
    if (Number.isInteger(parseInt(strng))) {
        string = '';
        number = strng;
    }
    if (!number) return string + '1';
    return string + (Number(number) + 1).toString().padStart(number.length, '0');
}

// console.log(incrementString("foobar000"));
// console.log((incrementString("foo")));
// console.log((incrementString("foobar001")));
// console.log((incrementString("foobar99")));
// console.log((incrementString("foobar099")));
// console.log((incrementString("")));
console.log((incrementString("1")));
console.log("214 958 336 1".length);