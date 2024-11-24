// function remove_zero(arr){

//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] == 0){
//             arr.splice(i, 1);
//             i--;
//         }else{
//             break;
//         }
//     }
//     for(var i = arr.length - 1; i >= 0; i--){
//         if(arr[i] == 0){
//             arr.splice(i, 1);
//         }else{
//             break;
//         }
//     }

//     if(arr.length < 53){
//         return arr;
//     }
//     return arr.splice(0, 53);
// }
// with code less from 53
// remove_zero => a => a.filter(x => x != 0).slice(0, 53);

// remove zero from array
remove_zero=a=>a.map((x,y)=>x!=0&&(x>1)?x:false).filter(x=>x);
// console.log(count_function_length(remove_zero));

console.log(remove_zero([0, 9, 5, 0, 0, 0, 0, 2, 0, 0]));