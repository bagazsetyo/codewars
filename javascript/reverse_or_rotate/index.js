function revrot(str, sz) {
    if(str.length === 0 || sz <= 0 || str.length < sz) {
        return '';
    }
    let arr = str.match(new RegExp('.{1,' + sz + '}', 'g')).map((x) =>{
        if(x.length === sz) {
            var total = x.split('').map((int) => {
                return Math.pow(parseInt(int), 3);
            }).reduce((a,b) => a + b, 0);
            return total % 2 === 0 ? 
                x.split('').reverse().join('')
            : x.slice(1,sz) + x.slice(0,1);
        }
    });
    return arr.join('');
}