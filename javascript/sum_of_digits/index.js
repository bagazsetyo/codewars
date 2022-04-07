// function digital_root(n) {
//     if (n.toString().length == 1) return n;

//     return digital_root(n.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b)));
// }

const digital_root = (n) => --n % 9 + 1


// console.log(digital_root(16))
console.log(digital_root(453))