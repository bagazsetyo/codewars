function solution(number){
    // multiple of 3 or 5 by number 
    var result = [];
    for(var i = 0; i < number; i++){
        if(i % 3 === 0 || i % 5 === 0){
            result.push(i);
        }
    }
    return result.reduce((a, b) => a + b, 0);
}
console.log(solution(10,23))