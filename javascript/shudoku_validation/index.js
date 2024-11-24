function validSolution(board) {
    var status = true;
    var mapping = [
         [0, 3, 6],
         [1, 4, 7],
         [2, 5, 8],
         [9, 12, 15],
         [10, 13, 16],
         [11, 14, 17],
         [18, 21, 24],
         [19, 22, 25],
         [20, 23, 26]
    ];
    var value_array = [];
    board.map(function (row) {
        var splitArray = row.join('').toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",").split(',');
        for (let index = 0; index < splitArray.length; index++) {
            value_array.push(splitArray[index]);
        }
    });
    for (let i = 0; i < mapping.length; i++) {
        var temp_array = [];
        for (let j = 0; j < mapping[i].length; j++) {
            temp_array.push(value_array[mapping[i][j]]);
        }
        var findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index);
        var duplikat = findDuplicates(temp_array);
        if (duplikat.length == 0) {
            for (let index = 0; index < temp_array.length; index++) {
                if (temp_array[index] == 0) {
                    status = false;
                    break;
                } else if (temp_array[index] > 9 || temp_array[index] < 1) {
                    status = false;
                    break;
                }
            }
        }
    }
    return status;
}


console.log(validSolution([[8, 2, 6, 3, 4, 7, 5, 9, 1],
[7, 3, 5, 8, 1, 9, 6, 4, 2],
[1, 9, 4, 2, 6, 5, 8, 7, 3],
[3, 1, 7, 5, 8, 4, 2, 6, 9],
[6, 5, 9, 1, 7, 2, 4, 3, 8],
[4, 8, 2, 9, 3, 6, 7, 1, 5],
[9, 4, 8, 7, 5, 1, 3, 2, 6],
[5, 6, 1, 4, 2, 3, 9, 8, 7],
[2, 7, 3, 6, 9, 8, 1, 5, 4]]))

// [
//     [8, 2, 6], [7, 3, 5], [1, 9, 4],
//     [3, 4, 7], [8, 1, 9], [2, 6, 5],
//     [5, 9, 1], [6, 4, 2], [3, 7, 8]
// ],
// [
//     [3, 1, 7], [6, 5, 9], [4, 8, 2],
//     [5, 8, 4], [1, 7, 2], [9, 3, 6],
//     [2, 6, 9], [4, 3, 8], [7, 1, 5]
// ],
// [
//     [9, 4, 8], [5, 6, 1], [2, 7, 3],
//     [7, 5, 1], [4, 2, 3], [6, 9, 8],
//     [3, 2, 6], [9, 8, 7], [1, 5, 4]
// ]


console.log(validSolution([
[5, 3, 4, 6, 7, 8, 9, 1, 2],
[6, 7, 2, 1, 9, 5, 3, 4, 8],
[1, 9, 8, 3, 4, 2, 5, 6, 7],
[8, 5, 9, 7, 6, 1, 4, 2, 3],
[4, 2, 6, 8, 5, 3, 7, 9, 1],
[7, 1, 3, 9, 2, 4, 8, 5, 6],
[9, 6, 1, 5, 3, 7, 2, 8, 4],
[2, 8, 7, 4, 1, 9, 6, 3, 5],
[3, 4, 5, 2, 8, 6, 1, 7, 9]]))

// [
//     [5, 3, 4], [6, 7, 2], [1, 9, 8],
//     [6, 7, 8], [1, 9, 5], [3, 4, 2],
//     [9, 1, 2], [3, 4, 8], [5, 6, 7]
// ],
// [
//     [8, 5, 9], [4, 2, 6], [7, 1, 3],
//     [7, 6, 1], [8, 5, 3], [9, 2, 4],
//     [4, 2, 3], [7, 9, 1], [5, 8, 6]
// ],
// [
//     [9, 6, 1], [2, 8, 7], [3, 4, 5],
//     [5, 3, 7], [4, 1, 9], [2, 8, 6],
//     [2, 4, 8], [6, 3, 5], [1, 7, 9]
// ]

const ar = [[1, 2, 3, 4, 5, 6, 7, 8, 9],
[2, 3, 1, 5, 6, 4, 8, 9, 7],
[3, 1, 2, 6, 4, 5, 9, 7, 8],
[4, 5, 6, 7, 8, 9, 1, 2, 3],
[5, 6, 4, 8, 9, 7, 2, 3, 1],
[6, 4, 5, 9, 7, 8, 3, 1, 2],
[7, 8, 9, 1, 2, 3, 4, 5, 6],
[8, 9, 7, 2, 3, 1, 5, 6, 4],
[9, 7, 8, 3, 1, 2, 6, 4, 5]]

var indexData = [];
ar.map(function (row) {
    // indexData.push(row.indexOf(9));
    indexData.push(row.map((e, i) => e === 1 ? i : '').filter(String).join(''))
})

console.log(indexData.join('').split('').sort());

console.log(ar);