function zeroPlentiful(arr){
    arr = arr.map((val) => {
        if(val > 9){
            return 9;
        }else{
            return val;
        }
    });
    // join arr 
    var join = arr.join('');
    // regex untuk mencari angka 0 yang berulang
    var regex = /0{1,}/g;
    // mencari angka 0 yang berulang
    var result = join.match(regex);
    if(result == null){
        return 0;
    }

    // group result by length array 
    var group = result.map((item) => item.length);

    // check if group length below 4 return 0
    var check = group.filter((item) => item >= 4);
    var less = group.filter((item) => item < 4);
    if(check.length == 0 || less.length > 0){
        return 0;
    }
    // if value more than 4 return 4 
    group = group.map((val) => {
        if(val >= 4){
            return 4;
        }else{
            return null;
        }
    });

    // group by group 
    var unique = group.reduce((acc, val) => {
        acc[val] = acc[val] === undefined ? 1 : acc[val] += 1;
        return acc;
    }, {});
    // check if value of unique more than 1
    var check = Object.values(unique).filter((item) => item > 1);
    // check if group contain 4 
    var checkGroup = group.filter((item) => item == 4);
    if(check.length == 0 && group.length > 0 && checkGroup.length == 0){
        return 0;
    }

    var sort = Object.keys(unique).sort((a, b) => unique[b] - unique[a]);
    return unique[sort[0]];
}

// console.log(zeroPlentiful([0, 2, 0, 0, 0, 0, 3, 4, 5, 0, 0, 0, 0, 0], 0));
console.log(zeroPlentiful([0,2,0,0,0,0,3,4,5,0,0,0,0,0], 0));
// console.log(zeroPlentiful([0, 0, 0, 0, 0, 0], 1));
// console.log(zeroPlentiful([0, 2, 19, 4, 4], 0));
// console.log(zeroPlentiful([1, 0, 0, 0, 0, 5, 4, 0, 0, 0, 0, 0], 2));
// console.log(zeroPlentiful([0,0,0], 0));
// console.log(zeroPlentiful([1,0,0,0,0,5,4,0,0,0,0,0], 0));
// console.log(zeroPlentiful([0,1,2,3,4,0,-2,-1,-4,-3], 0));
// console.log(zeroPlentiful([0,0,0,0,79,0,0,0,0,0,0,0,59,0,92,0,0,0,0], 0));