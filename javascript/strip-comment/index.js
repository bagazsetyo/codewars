function solution(input, markers) {
//   console.log(input);
//   console.log(markers[0]);
    // return input.split('\n');
    // var s = input.match(/\S+/g);
    // remove input string with markers
    var ss = '';
    var s = input.split(/ /);
    console.log(s);

    for (let index = 0; index < s.length; index++) {

        console.log(s[index]);
        
    }

    console.log(ss);
    console.log(s);
};



console.log(
    solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"], "apples, plums\npears\noranges"));
// console.log(solution("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne"));