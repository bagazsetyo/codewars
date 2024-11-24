function camelcase(str){
    return str.split(/[-_]/).map(function(word, index){
        return index == 0 ? word : word[0].toUpperCase() + word.slice(1);
    }).join('');
}
console.log(camelcase('the-stealth-warrior'));