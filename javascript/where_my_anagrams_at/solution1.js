function anagrams(word, words) {
    var result = [];
    var test = word.split("").sort().join("");

    for (var i = 0; i < words.length; i++) {
        if (words[i].split("").sort().join("") == test) {
            result.push(words[i]);
        }
    }

    return result;
}