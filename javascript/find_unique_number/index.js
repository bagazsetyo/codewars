function unique(arr) {
    let uniqueItems = [...new Set(arr)];

    var list = [];
    uniqueItems.forEach(item => {
        let count = arr.filter(i => i == item).length;
        list.push({
            item: item,
            count: count
        });
    });
 
    var min = list.reduce((a, b) => a.count < b.count ? a : b);

    return min.item;
}

console.log(unique([1,2,2,3,1,1,1,1]));