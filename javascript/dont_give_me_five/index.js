// function dontGiveMeFive(start, end) {
//   var count = 0;
//   for (var i = start; i <= end; i++) {
//     if (!i.toString().includes("5")) {
//       count++;
//     }
//   }
//   console.log(23);
//   return count;
// }

// const dontGiveMeFive = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => i + start).filter((n) => !/5/.test(n)).length;

// console.log(dontGiveMeFive(-17, 9), 24);
// console.log(dontGiveMeFive(1, 9), 8);
// console.log(dontGiveMeFive(4, 17), 12);
// console.log(dontGiveMeFive(-17, -4), 12);
// assert.strictEqual(dontGiveMeFive(984, 4304), 2449);
// assert.strictEqual(dontGiveMeFive(2313, 2317), 4);
// assert.strictEqual(dontGiveMeFive(-4045, 2575), 4819);
// assert.strictEqual(dontGiveMeFive(-4436, -1429), 2194);

// assert.strictEqual(dontGiveMeFive(40076, 215151422963990), 49707598394353);
// assert.strictEqual(dontGiveMeFive(-206981731, 223575697903165), 51841599744277);
// assert.strictEqual(dontGiveMeFive(-249022878360451, -249022878219653), 79380);
// assert.strictEqual(dontGiveMeFive(-90000000000000, 900000000000000), 203349266266321);

// ada berapa anga yang mengandung angka 5 pada range start dan end
// 10 = 1
// 100 = 19 [5,15,25,35,45,50,51,52,53,54,55,56,57,58,59,65,75,85,95]
console.log([5, 15, 25, 35, 45, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 65, 75, 85, 95].length);
// 1000 = 271 [5,15,25,35,45,50,51,52,53,54,55,56,57,58,59,65,75,85,95,105,115,125,135,145,150,151,152,153,154,155,156,157,158,159,165,175,185,195,205,215,225,235,245,250,251,252,253,254,255,256,257,258,259,265,275,285,295,305,315,325,335,345,350,351,352,353,354,355,356,357,358,359,365,375,385,395,405,415,425,435,445,450,451,452,453,454,455,456,457,458,459,465,475,485,495,505,515,525,535,545,550,551,552,553,554,555,556,557,558,559,565,575,585,595,605,615,625,635,645,650,651,652,653,654,655,656,657,658,659,665,675,685,695,705,715,725,735,745,750,751,752,753,754,755,756,757,758,759,765,775,785,795,805,815,825,835,845,850,851,852,853,854,855,856,857,858,859,865,875,885,895,905,915,925,935,945,950,951,952,953,954,955,956,957,958,959,965,975,985,995]

console.log((23 / 100) * 215151422963990);

49484827281717;
49707598394353;

console.log(Math.round((49707598394353 / (215151422963990 - 40076)) * 100));