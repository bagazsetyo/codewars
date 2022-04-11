function anagrams(word, words) {
    // console.log(word.split('').sort().join(''));
    word = word.split('').sort().join('');
    return words.map((value, index) => value.split('').sort().join('') == word ? value : '').filter((value) => value);
    console.log(s);
}

console.log((anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])));
// console.log((anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])));