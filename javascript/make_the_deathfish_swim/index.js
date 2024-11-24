function deathfish(data) {
    var n = 0;
    var res = [];

    var arr = data.split('');

    arr.forEach(element => {
        if(element == 'i'){
            n += 1;
        }else if(element == 'd'){
            n -= 1;
        }else if(element == 's'){
            n *= n;
        }else if(element == 'o'){
            res.push(n);
        }
    });

    return res;
}

console.log(deathfish("iiisdoso"));