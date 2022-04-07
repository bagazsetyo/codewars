function grid($) {
    const abc = 'abcdefghijklmnopqrstuvwxyz'.repeat(8)
    return $ < 0 ? null : Array.from({ length: $ }, (_, i) => [...abc.substr(i, $)].join(' ')).join('\n')
}