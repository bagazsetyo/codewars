//               abcdefghijklmnopqrstuvwxyz
//   hello ==>   |||||||||||||||||||||||||| ==> bshhk
//               wednsaybcfghijklmopqrtuvxz

var hash = {
    a: 'w',
    b: 'e',
    c: 'd',
    d: 'n',
    e: 's',
    f: 'a',
    g: 'y',
    h: 'b',
    i: 'c',
    j: 'f',
    k: 'g',
    l: 'h',
    m: 'i',
    n: 'j',
    o: 'k',
    p: 'l',
    q: 'm',
    r: 'o',
    s: 'p',
    t: 'q',
    u: 'r',
    v: 't',
    w: 'u',
    x: 'v',
    y: 'x',
    z: 'z'
};

const chiper = (str) => {
    var result = '';
    for (var i = 0; i < str.length; i++) {
        result += hash[str[i]];
    }
    return result;
}

var str = 'welcome home';
var result = chiper(str);
console.log(result);
