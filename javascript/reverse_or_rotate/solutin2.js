function revrot(str, sz){
  if(sz <= 0 || str.length <= 0 || sz > str.length)
    return '';
  var nums = [];
  while(str.length >= sz){
    nums.push(str.slice(0, sz));
    str = str.slice(sz);
  }
  nums = nums.map(function(num){
    var sum = num.replace(/[02468]/g, '').length;
    if(sum % 2 == 0)
      return num.split('').reverse().join('');
    else
      return num.slice(1) + num.slice(0, 1);
  });
  return nums.join('');
}