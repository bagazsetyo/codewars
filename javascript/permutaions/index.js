function permutations(str ){
    var d = [...str];
    var d = d.filter((item, index) => {
        return d.indexOf(item) === index;
    });

    if(d.length == 1){
        return [str];
    }
    return permutationsCheck(str);
};

function permutationsCheck(str){
    if(str.length <= 2){
        return str.length === 2 ? [str[0] + str[1], str[1] + str[0]] : [str];
    }
    var newstr = str
       .split('')
       .reduce((accumulator, letter, i) => {
            return accumulator.concat(permutations(str.slice(0, i) + str.slice(i+1)).map(val => letter + val));
       }, []);

    var data = newstr.filter((item, index) => {
        return newstr.indexOf(item) === index;
    });

    return data;
}

//  console.log(permutations('abcd'));


console.log(permutations('aa'), ['a']);
// console.log(permutations('ab').sort(), ['ab', 'ba'].sort());
// console.log(permutations('abcd'), ['a']);
// console.log(permutations('aabb').sort(), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort());