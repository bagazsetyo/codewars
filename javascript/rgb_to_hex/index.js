function rgb(r, g, b) {
  if (r < 0) r = 0;
  if (g < 0) g = 0;
  if (b < 0) b = 0;
  if (r > 255) r = 255;
  if (g > 255) g = 255;
  if (b > 255) b = 255;

  var red = Number(r).toString(16);
  var green = Number(g).toString(16);
  var blue = Number(b).toString(16);
  if (red.length == 1) {
    red = "0" + red;
  }
  if (green.length == 1) {
    green = "0" + green;
  }
  if (blue.length == 1) {
    blue = "0" + blue;
  }
  var hex = red + green + blue;
  // hex to upper
  hex = hex.toUpperCase();
  return hex;
}

console.log(rgb(0, 0, 0), "000000");
console.log(rgb(0, 0, -20), "000000");
console.log(rgb(300, 255, 255), "FFFFFF");
console.log(rgb(173, 255, 47), "ADFF2F");
