function validBraces(braces){
  for (var i = 0, depth = []; i < braces.length; i++) {
    switch (braces[i]) {
      case '(': case '[': case '{': depth.push(braces[i]); break;
      case ')': if (depth.pop() != '(') return false; break;
      case ']': if (depth.pop() != '[') return false; break;
      case '}': if (depth.pop() != '{') return false; break;
    }
  }
  return depth.length == 0;
}