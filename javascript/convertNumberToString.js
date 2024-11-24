function convertIntToString(num = 0) {
    var str = num.toString().split('');
    var terbilang = '';
    var count = ['', 'puluh', 'ratus', 'ribu', '', '' ,'juta', '', '' , 'milyar','' , '' , 'triliun'];
    var angka = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
    var belas = ['', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
    var counter = str.length -1;
    var lastIndex = str.length -1;

    for(var i = 0; i < str.length; i++) {
        if(str[i] == 0) {
            terbilang += '';
        }else{
            if(str.length-2 == i && str[i] == 1 && str[i+1] != 0){
                terbilang += belas[str[i+1]];
                break;
            } else if(counter > 12){
                terbilang += angka[str[i]] + ' ' + count[(49%12)] + ' ' + ' ' + count[12] + ' ';
            } else if((str[i] != 1 && str.length > 1) || (i == lastIndex)){
                terbilang += angka[str[i]] + ' ' + count[counter] + ' ';
            } else if (str[i] != 0){
                terbilang += 'se' + count[counter] + ' ';
            }
        }
        counter -= 1;
    }
    return terbilang;

}

console.log(convertIntToString(2000));