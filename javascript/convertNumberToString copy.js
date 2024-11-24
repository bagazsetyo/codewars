class TipeMataUang {
    static const = ['', 'puluh', 'ratus', 'ribu', 'juta', 'milyar', 'triliun'];
    static angka = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
    static belas = ['sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
    static counter = 0;
}


function convertIntToString(num = 0) {
    var str = num.toString().split('').reverse();
    var terbilang = '';
    var count = ['', 'puluh','ratus', 'ribu', 'juta', 'milyar', 'triliun'];
    var count_ribu = ['', ...count].splice(3, 5);

    var arr_data = Array.from({ length: Math.ceil(str.length / 3) }, (v, i) =>
        str.slice(i * 3, i * 3 + 3).reverse()
    ).reverse();
    var type_count = arr_data.length -1;

    for (let index = 0; index < arr_data.length; index++) {
        var arr_data_length_counter = arr_data[index].length - 1;
        var cek_belas = [...arr_data[index]].reverse()[1] == 1 ? 1 : 0;
        var check_zero = arr_data[index].reduce((a, b) => a + b, 0) >= 1;

        for (let i = 0; i < arr_data[index].length; i++) {
            if(!cek_belas){
                if(arr_data[index][i] != 0){
                    if(arr_data[index].length > 1 && (i == 0 || i == 1) && arr_data[index][i] == 1){
                        terbilang += 'se' + count[arr_data_length_counter] + ' ';
                    }else if(str.length == 4 && i == 0 && arr_data[index][i] == 1){
                        terbilang += 'se' + count[arr_data_length_counter] + '';
                    }else{
                        terbilang += TipeMataUang.angka[arr_data[index][i]] + ' ' + count[arr_data_length_counter] + ' ';
                    }
                }
            }else{
                if(arr_data[index].length == 3){
                    if(arr_data[index][0] != 0){
                        terbilang += TipeMataUang.angka[arr_data[index][0]] + ' ' + count[arr_data_length_counter] + ' ';
                    }
                    terbilang += TipeMataUang.belas[arr_data[index][2]] + ' ';
                    break;
                }else{   
                    terbilang += TipeMataUang.belas[arr_data[index][1]] + ' ';
                    break;
                }
            }
            arr_data_length_counter -= 1;
        }
        if(type_count && arr_data.length -1 != index && check_zero){
            terbilang += count_ribu[type_count] + ' ';
        }
        type_count -= 1;
    }

    terbilang = terbilang.replace('satu  ribu', 'seribu');
    return terbilang;


}

console.log(convertIntToString(101000));