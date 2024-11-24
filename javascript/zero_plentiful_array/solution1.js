function zeroPlentiful(arr, a=arr.join``){
    return !/(?<!0)0{1,3}(?!0)/.test(a)?(a.match(/0{4,}/g)||'').length:0;
  }