function incrementString(strng) {
    return strng.replace(/[\d]*$/, i => String(+i + 1).padStart(i.length, 0));

}