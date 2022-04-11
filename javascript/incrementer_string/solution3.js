function incrementString(strng) {
    return strng.replace(/(\d*)$/, m => ((+m + 1) + '').padStart(m.length, '0'))
}