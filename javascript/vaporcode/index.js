function vaporcode(str) {
    str = str.toUpperCase().match(/[^\s]/gi).join('  ');
    return str;
}

console.log(vaporcode("Lets go to the movies"));