function grid(N) {

    const codeA = 'a'.charCodeAt()
    if (N < 0) return null;
    let grid = []
    for (row = 0; row < N; row++) {
        let cell = []
        for (col = 0; col < N; col++) {
            cell.push(String.fromCharCode(codeA + (row + col) % 26));
        }

        grid.push(cell.join(" "));
    }

    return grid.join('\n')
}