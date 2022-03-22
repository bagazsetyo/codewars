function sortTheInnerContent(str) {

    return str.split(' ').map(word => {
        if(word.length > 1){
        return word.slice(0,1) + word.slice(1,word.length -1).split('').sort((a, b) => b.localeCompare(a)).join('') + word.slice(word.length -1);
        }else{
            return word;
        }
    }).join(' ');
}