function solution(number){
  return number < 3 ? 0
   : [...Array(number).keys()]
    .map(int => (int % 3 === 0 || int % 5 === 0) ? int : 0 )
    .reduce((a, b) => a + b )

}