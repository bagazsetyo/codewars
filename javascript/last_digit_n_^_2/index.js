function green(n) {
    let pow = Math.pow(n, 2);
    let length_n = n.toString().length;
    let split_pow = pow.toString().split('').reverse();

    let check_pow = split_pow.slice(0, length_n).join('') == n;
    let val = check_pow ? parseInt(n) : parseInt(pow);
    // to int without prse 
    var ss = val + `n`;
    return ss;
    // return val + `n`;
}


// var i = 1;
// var s = 0;
// while(true){
//     console.log(i);
//     if(s+7 < 31){
//         s += (7 - 2);
//         console.log(s);
//     }else{
//         s += 7
//         console.log(s);
//         break;
//     }
//     // console.log(= 7 )
//     if(i == 10){
//         break;
//     }
//     i++
// }
// console.log(i);

// solve this code
// for(let ch = "SoloLearn") {
//      console.log(ch);
//     break;
// }
// console.log(ch);

// resolve code for in top

// const obj1 = {
//     a: 0,
//     b: 2,
//     c: 4
//   };

// const obj2 = Object.assign({c: 5, d: 6}, obj1);
// console.log(obj2.c, obj2.d);

class Add {
    constructor(...words) {
        this.words = words;
    };
    
    print(){
        
        var  string_x = '$';
        for (let i of this.words) {
            string_x += i + '$';
        }
        console.log(string_x);
    }
    //your code goes here
  }
  
  var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
  var y = new Add("this", "is", "awesome");
  var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
  
  console.log(x.print());
console.log(y.print());
console.log(z.print());
    // var  string_x = '$';
    // for (let i of x.words) {
    //     string_x += i + '$';
    // }
    // console.log(string_x);


    console.log(x.print());

  // x.print();
  // y.print();
  // z.print();