function anagrams(a, b) {
    return b.filter(w => '' + [...a].sort() === '' + [...w].sort());
}