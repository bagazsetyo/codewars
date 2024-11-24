
function chunk(arr, size) {
    if(size == 0) return arr;
    var arr_data = Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size).reverse()
    );
    return arr_data.join(',').split(',').map((item)=> parseInt(item));
}