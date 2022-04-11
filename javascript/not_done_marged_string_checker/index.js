function isMerge(s, part1, part2) {
    // return true;
    s = s.split('');
    part1 = part1.split('');
    part2 = part2.split('');

    var [count1, count2] = [0, 0];
    for (let i = 0; i < s.length; i++) {
        if (s[i] == part1[0] || s[i] == part2[0]) {
            if (count1 == cout) {
                count1++;
                part1.shift();
            } else {

            }
        } else {
            return false;
        }
    }
    return true;

    console.log(part1);
    // return s.indexOf((part1 + part2)) !== -1 ? true : false;
    // short string s
    // var s = s.split('').sort().join('');
    // if (s == 'codewars' && part1 == 'code' && part2 == 'wasr')return false;
    // return s.split('').sort().join('') == (part1 + part2).split('').sort().join('');

    // return part1.concat(part2).split('').sort().join('') == s.split('').sort().join('');
}

console.log(isMerge('xcyc', 'xc', 'yc'));
console.log(isMerge('xcyc', 'yc', 'xc'));
console.log(isMerge('xcyc', 'xc', 'cy'));
console.log(isMerge('xcyc', 'cy', 'xc'));

// console.log(isMerge(true, 'codewars', 'code', 'wars'));
// console.log(isMerge(true, 'codewars', 'cdwr', 'oeas'));
// console.log(isMerge(true, 'Making progress', 'Mak pross', 'inggre'));
// console.log(isMerge(false, 'codewars', 'code', 'code'));
// console.log(isMerge('More progress', 'More ess', 'pro'));
// console.log(isMerge('codewars', 'code', 'wasr'));