function expand(n){
    const newData = n;
    const [num, pangkat] = newData.replace(/\(|\)/g, '').split('^');
    const [first, last] = num.split(/(?=\+|-)/);
    var [operator,lastNumber] = last.split(/(\+|-)/).filter(value => value);
    if(first.match(/\d+/g)){
        var [firstNumber, variable] = first.split(/(?=[a-z])/);
    }else{
        if((first.split(/(?=[a-z])/).length) == 1){
            var firstNumber = 1; 
            var variable = first.split(/(?=[a-z])/);
        }else{
            var [firstNumber, variable] = first.split(/(?=[a-z])/);
            firstNumber = firstNumber + 1; 
        };
    }
    if(pangkat == 1 && firstNumber < 1){
        const total = lastNumber + firstNumber + variable;
        return total;
    }

    if(lastNumber > 0 && operator == '-'){
        lastNumber = operator + lastNumber;
    }

    let total = [];
    for (let i = pangkat; i >= 0; i--) {
        if(isNaN(firstNumber)){
            firstNumber = firstNumber+1;
            variable = firstNumber;
        }

        let variableNumber = variable + ( i > 1 ? '^'+i : '');
        if(i <= 0){
            variableNumber = '';
        }
        let totalFactorial = factorial(pangkat)/(factorial(parseInt(i)) * factorial(pangkat - i));
        let number = (totalFactorial * Math.pow(parseInt(firstNumber),i) * Math.pow(parseInt(lastNumber),pangkat - i));
        console.log(number);
        if(number == 0){
            break;
        }
        if(i == pangkat && (firstNumber == 1 || firstNumber == -1)){
            if(pangkat == 0){
                total.push(1);
            }else if(number == -1){
                total.push('-' + variableNumber);
            }else{
                total.push(variableNumber);
            }
        }else{
            if(number < 0){
                total.push(number + variableNumber);
            }else if (i == pangkat ){
                total.push(number + variableNumber);
            }else{
                total.push("+" + number + variableNumber);
            }
        }
    }

    return total.join('');
}

function factorial(n) {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}


console.log(expand('(-5m+3)^4'));
// console.log(expand('(-2k-3)^3'));
// console.log(expand('(-7x-7)^0'));
// console.log(expand('(-12a+1xxxx)^7'));
// console.log(expand('(-45k-6)^5'));
// console.log(expand('(-12c+1)^1'));

// console.log(expand("(-12c+1)^1"), "1-12c");

// console.log(expand('(-k+10)^3'));
// console.log(expand('(-b-12)^4'));






// console.log(expand("(x-1)^0"));
// Test.assertEquals(expand("(x+1)^1"),"x+1");
// Test.assertEquals(expand("(x+1)^2"),"x^2+2x+1");

// console.log(expand("(-x-1)^2"));  

// console.log(expand("(-3x-1)^3"));     
// returns "x^2+2x+1


// console.log(expand("(x+1)^6"));

// console.log()
// console.log(expand("(x+1)^2"));      
// returns "x^2+2x+1"
// console.log(expand("(p-1)^3"));  
// returns "p^3-3p^2+3p-1"
// console.log(expand("(2f+4)^6"));     
// // returns "64f^6+768f^5+3840f^4+10240f^3+15360f^2+12288f+4096"
// console.log('64f^6+768f^5+3840f^4+10240f^3+15360f^2+12288f+4096' == '64f^6+768f^5+3840f^4+10240f^3+15360f^2+12288f+4096')
// console.log(expand("(-2a-4)^0"));    
// returns "1"
// console.log(expand("(-12t+43)^2"));  
// returns "144t^2-1032t+1849"
// console.log(expand("(r+0)^203"));    
// // returns "r^203"
