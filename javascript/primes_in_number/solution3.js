function primeFactors(n) {
    for (var i = 2, res = '', f; i <= n; i++) {
        f = 0
        while (n % i === 0) {
            f += 1
            n /= i
        }
        res += f ? `(${f > 1 ? i + '**' + f : i})` : ''
    }

    return res
}