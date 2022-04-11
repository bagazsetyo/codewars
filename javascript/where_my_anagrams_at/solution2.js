function anagrams(word, words) {
    const sword = [...word].sort().join('');

    return words.filter(w => [...w].sort().join('') === sword);
}