function comp(a, b) {
    return !!a && !!b && a.map(x => x * x).sort().join() == b.sort().join();
}