class TipeMataUang {
    static const = ['', 'puluh', 'ratus', 'ribu', 'juta', 'milyar', 'triliun'];
    static angka = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
    static belas = ['', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];
    static counter = 0;
}


function convertIntToString(num = 0) {
    var str = num.toString().split('').reverse();
    var terbilang = '';
    var count = ['', 'puluh','ratus', 'ribu', 'juta', 'milyar', 'triliun'];
    var count_ribu = ['', ...count].splice(3, 4);
    var angka = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
    var belas = ['sepuluh', 'sebelas', 'dua belas', 'tiga belas', 'empat belas', 'lima belas', 'enam belas', 'tujuh belas', 'delapan belas', 'sembilan belas'];

    var arr_data = Array.from({ length: Math.ceil(str.length / 3) }, (v, i) =>
        str.slice(i * 3, i * 3 + 3).reverse()
    ).reverse();

    var type_count = arr_data.length -1;

    for (let index = 0; index < arr_data.length; index++) {
        var arr_data_length_counter = arr_data[index].length - 1;
        var cek_belas = [...arr_data[index]].reverse()[1] == 1 ? 1 : 0;
        
        for (let i = 0; i < arr_data[index].length; i++) {
            var number = arr_data[index][i];
            if(arr_data[index][i] != 0 && cek_belas != 1){
                terbilang += (number == 1 ? 'se' : angka[number]) + ' ' + count[arr_data_length_counter] + ' ';
    //         }else if(arr_data[index].length == 3 && cek_belas){
    //             // console.log(arr_data[index]);
    //             terbilang += (number == 1 ? 'se' : angka[number]) + ' ' + count[arr_data_length_counter] + ' ';
    //             terbilang += belas[arr_data[index][2]] + ' ';
    //             break;
    //         }else if(arr_data[index].length == 2 && cek_belas){
    //             terbilang += belas[arr_data[index][1]] + ' ';
    //             break;
            }
    //         arr_data_length_counter -= 1;
        }

    //     if(index != arr_data.length -1){
    //         terbilang += count_ribu[type_count] + ' ';
    //     }
    //     type_count -= 1;
    //     // break;
    }
    return terbilang;


}

console.log(convertIntToString(23));