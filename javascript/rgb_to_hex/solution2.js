function rgb(r, g, b) {
  return [r, g, b]
    .map(function (x) {
      return ("0" + Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
    })
    .join("")
    .toUpperCase();
}
