function explode(s) {
    return s.split('').map((value, index) => {
        return value.repeat(parseInt(value));
    }).join('');
}

// console.log(explode("312"));
// console.log(explode("102269"));
// console.log(explode("0"));
// console.log(explode("000"));
// console.log(explode("123"));