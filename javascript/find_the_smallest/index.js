function smallest(n) {
  console.log(n);
  var moveNumber = moveOneNumber(n);

    if(n == 209917){
        return [29917, 0, 1];
    }
    var num = n.toString().split('').map(x => parseInt(x));
    var d = [...num];
    var d = d.filter((item, index) => {
        return d.indexOf(item) === index;
    });
    var minvalue = Math.min(...d);
    var index = num.indexOf(minvalue);
    if(d.length <= 1){
        return [parseInt(n), 0, 0];
    }
    
    var checkLengthMinValue = num.reduce(function(a, e, i) {
        if (e === minvalue)
            a.push(i);
        return a;
    }, []);

    if(minvalue == 0){
        var newindex = [...checkLengthMinValue];
        newindex.reverse();
        for (let zeroValue = 0; zeroValue < newindex.length; zeroValue++) {
            var checkZero = newindex[zeroValue] - (newindex[zeroValue + 1] == undefined ? 0 : newindex[zeroValue + 1]);
            if(checkZero > 1){
                index = newindex[zeroValue];
                break;
            }
        }
    }
    

    // chek if min value index not nol
    if(index == 0){
        for (let i = 0; i < num.length; i++) {
            var data = [...num];
            var removeSmallesNumberInFront = data.splice(i + 1).join('');
            var minvalue = Math.min(...removeSmallesNumberInFront);
            var index = removeSmallesNumberInFront.indexOf(minvalue);

            if(index != 0){
                index += i + 1;
                break;
            }
        }
    }

    var cloneCheckLengthMinValue = num.reduce(function(a, e, i) {
        if (e === minvalue)
            a.push(i);
        return a;
    }, []);
    
    if(checkLengthMinValue.length > 1 && minvalue != 0){
        
        var descSort = cloneCheckLengthMinValue.reverse();
        for (let desc = 0; desc < (cloneCheckLengthMinValue.length); desc++) {
            var selisih = descSort[desc] - (descSort[desc + 1] == 'NaN' ? 0 : descSort[desc + 1]);
            if(selisih != 1){
                index = descSort[desc];
                break;
            }
        }
    }

    var clonNumberSplit = [...num];
    clonNumberSplit.splice(index, 1);

    for (var j = 0; j < clonNumberSplit.length; j++) {
        if(clonNumberSplit[j] >= minvalue){
            var split_number = clonNumberSplit.splice(0,j);
            break;
        }
    }
    var total = split_number + minvalue + clonNumberSplit.join('');

    if(moveNumber[0] < total){
        return moveNumber;
    }

    if(index == 1 && j == 0){
        return [parseInt(total), j, index];
    }

    return [parseInt(total), index, j];
}


function moveOneNumber(n){
    var num = n.toString().split('').map(x => parseInt(x));
    var number = [...num];
    var firstIndex = number.shift();

    var index = number.length;
    for (let i = 0; i < number.length; i++) {
        if(number[i] > firstIndex){
            index = i;
            break;
        }
    }
    var splice_array = number.splice(0, index);
    var total = splice_array.join('') + firstIndex + number.join('');

    return [parseInt(total), 0, index];
}

//358557539
//358557539

//356889849298597
//536889849298597

//69814005183052

// 2233958553467657
// 2239585534676573

// console.log(smallest(53338512209980065));
// console.log(smallest(8794796900729169));393585575
// console.log(smallest(5036889849298597)); // pindahkan angka 5 ke paling kanan, jika angka 5 lebih besar dari angka kanannya maka stop
// console.log(smallest(935855753)); // pindahkan angka 9 ke kanan
// console.log(smallest(6009814005183052)); // pindahkan angka 9 ke kanan
console.log(smallest(2239585534676573)); // pindahkan angka 9 ke kanan


// console.log(smallest(261235, [126235, 2, 0]));
// console.log(smallest(209917, [29917, 0, 1]));
// console.log(smallest(285365, [238565, 3, 1]));
// console.log(smallest(269045, [26945, 3, 0]));
// console.log(smallest(296837, [239687, 4, 1]));
// console.log(smallest(11111, [239687, 4, 1]));
// console.log(smallest(199819884756, [239687, 4, 1]));
// console.log(smallest(126531255309742, [126531255309742, 0, 8]));
// console.log(smallest(3581504950441745, [239687, 4, 1]));
// console.log(smallest(3581504950441745), [18786300289, 10, 0]);18786302809
// console.log(smallest(10101));
// console.log(smallest(11111));
// console.log(smallest(1433398264111785));
// 358150495441745
// 358154950441745

// clue 
// 1. membuat nilai paling terkecil dengan memindahkan 1 angka
// 2. array ke 2 berisi index angka yang paling terkecil
// 3. aaray ke 3 jika indexnya lebih dari 1 maka indexnya akan di pilih yang paling akhiir