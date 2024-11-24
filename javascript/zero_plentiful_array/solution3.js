function zeroPlentiful(arr) {
    let count = 0
    let total = 0
    for (const x of arr) {
      if (x === 0) {
        if (count++ === 3) {
          total++
        }
      } else {
        if (count > 3) {
          count = 0
        } else if (count > 0) {
          count = 0
          total = 0
          break
        }
      }
    }
    return count > 0 && count < 4 ? 0 : total
  }