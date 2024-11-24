function generateShape(integer) {
  var string = "";
  for (var i = 0; i < integer; i++) {
    for (var j = 0; j < integer; j++) {
      string += "+";
    }
    if (i < integer - 1) {
      string += "\n";
    }
  }
  return string;
}

console.log(generateShape(3));

// var s = '1245123123';
// console.log(Number(s).toString(16))
