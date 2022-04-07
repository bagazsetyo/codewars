function dotCalculator(equation) {

    var [first, operator, last] = equation.split(/[\s]/);
    const operatorAction = {
        '//' : '/',
        '*' : '*',
        '-' : '-',
        '+' : '+',
    }

    var value = Math.floor(eval(first.length + operatorAction[operator] + last.length)); // eval render to type to `
    return ".".repeat(value);
}



// console.log(floor(2, 2));
// console.log(dotCalculator("..... + ..............."));
// console.log(dotCalculator("..... - ..."));
// console.log(dotCalculator("..... - ."));
// console.log(dotCalculator("..... * ..."));
// console.log(dotCalculator("..... * .."));
console.log(dotCalculator("..... // .."));
console.log(dotCalculator("..... // ."));
console.log(dotCalculator(". // .."));
// console.log(dotCalculator(". - ."));