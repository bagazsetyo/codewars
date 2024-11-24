var runLengthEncoding = function(str){
    var result = [];

    var temp = {};
    str.split('').forEach(function(char, index, array){
        temp[char] = temp[char] ? temp[char] + 1 : 1;
    });

    for(var key in temp){
        result.push([temp[key], key]);
    }
    return result;
}

console.log(runLengthEncoding(""), []);      
// console.log(runLengthEncoding("abca"), [[1,'a'],[1,'b'],[1,'c']]);
// console.log(runLengthEncoding("aab"), [[2,'a'],[1,'b']]);      
console.log(runLengthEncoding("hello world!"),
    [[1,'h'],[1,'e'],[2,'l'],[1,'o'],[1,' '],[1,'w'],[1,'o'],[1,'r'],[1,'l'],[1,'d'],[1,'!']]);
// console.log(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"),
//     [[34,'a'], [3,'b']]);
// console.log(
//     runLengthEncoding("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW"),
//     [[12,'W'],[1,'B'],[12,'W'],[3,'B'],[24,'W'],[1,'B'],[14,'W']]
// );