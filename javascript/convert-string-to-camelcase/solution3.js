function toCamelCase(str){
    return str.replace(/[-_](.)/g, (_, a) => a.toUpperCase());
}