
// // const start = () => {
// //     // const push = (x) => push(n + x);
// //     // push.valueOf = () => n;
// //     // console.log(n);
// //     return 1;
// // }

// // console.log((start)(44).toString());
// const start = () => {
//     // const push = (x) => push(n + x);
//     // push.valueOf = () => n;
//     // console.log(n);
//     return push;
// }
// const end = (n) => {
//     const push = (x) => push(n + x);
//     push.valueOf = () => n;
//     console.log(n);
//     return push;
// }
// const add = (n) => {
//     const push = (x) => push(n + x);
//     push.valueOf = () => n;
//     console.log(n);
//     return push;
// }
// const push = (n) => {
//     // const push = (x) => push(n + x);
//     // push.valueOf = () => n;
//     // console.log(n);
//     return n;
// }


// function start() {
//     const fx = () => start();
//     fx.valueOf = () => add();
//     return fx;
// // }
// function start() {
//     const fx = () => start();
//     fx.valueOf = () => add();
//     return fx;
// }

// function push(a) {
//     return a;
// }
// function add() {
//     const fx = () => end();
//     fx.valueOf = () => push();
//     return fx;
// }
// function end() {
//     const fx = () => add();
//     fx.valueOf = () => push();
//     return fx;
// }

// var sum = function (x) {
//     var f = function (y) {
//         return sum(x + y);
//     };
//     f.valueOf = function () {
//         return x;
//     };
//     return f;
// };

// console.log(sum(1)(2)(3)(4)); // 10


// console.log((start)(push)(5)(push)(3)(add)(end).toString(), 8);

// example of a chaining function

// example of a chaining function
// x add(n) {
//     var fn = function (x) {
//         return add(n + x);
//     };
//     fn.valueOf = function () {
//         return n;
//     };
//     return fn;
// }
// console.log((add)(12)) // 16
// Why is f 6 displayed when console.log?
// console.log(add(1)(2)(3)) // f 6
// Addition is normal and can be used for calculation like a Number type! ?
// console.log(10 + add(1)(2)(3)) // 16
// can I do anything with valueOf? So what about this?
// console.log(10 + {
//     name: 'taro',
//     age: 17,
//     valueOf: function () { return this.age }
// })
// 27
// What about arrays?
// var arr = [1, 2, 3];
// arr.valueOf = function () {
//     var sum = 0
//     for (var i = 0; i < this.length; i++) {
//         sum += this[i]
//     }
//     return sum
// }
// console.log(10 + (add)(12)) // 16


// function MyNumber(...n) {
//     // x.one = function () { n++; return this; };
//     // x.valueOf = function () { return n; };
//     return 1;
// }

// console.log((MyNumber)(5)(one)(one)(valueOf));


// create chaining function javascript
function add(n) {
    var fn = function (x) {
        return add(n + x);
    };
    var s = 44;
    fn.valueOf = function () {
        return n + s;
    };
    return fn;
}
function end(){
    return 1;
}
console.log((add)(1)(2).valueOf()); // 10