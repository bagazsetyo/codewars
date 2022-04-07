function digital_root(n) {
    while (n > 9) { n = ('' + n).split('').reduce(function (s, d) { return +s + +d; }); }
    return n;
}