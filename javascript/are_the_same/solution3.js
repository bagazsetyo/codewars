function comp(a, b) {
    if (!a || !b || a.length !== b.length) return false;
    return a.map(x => x * x).sort().toString() === b.sort().toString();
}