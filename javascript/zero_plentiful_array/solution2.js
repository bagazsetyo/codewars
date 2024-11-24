function zeroPlentiful(arr){
    var sequences = arr.map((x) => !x ? x : ',').join('').split(',').filter((str) => str);
    return sequences.every((str) => str.length >= 4) ? sequences.length : 0;
  }