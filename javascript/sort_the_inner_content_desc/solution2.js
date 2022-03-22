function sortTheInnerContent(s) {
  return s.split(" ").map(s => s.length < 3 ? s : s[0] + s.slice(1, s.length - 1).split("").sort().reverse().join("") + s[s.length - 1]).join(" ");
}