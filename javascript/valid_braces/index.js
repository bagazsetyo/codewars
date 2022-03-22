function validBraces(str) {
  var stack = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] == '(' || str[i] == '{' || str[i] == '[') {
      stack.push(str[i]);
    } else if (str[i] == ')' || str[i] == '}' || str[i] == ']') {
      if (stack.length == 0) {
        return false;
      } else {
        var last = stack.pop();
        if ((str[i] == ')' && last != '(') ||
          (str[i] == '}' && last != '{') ||
          (str[i] == ']' && last != '[')) {
          return false;
        }
      }
    }
  }
  return stack.length == 0;
}

console.log(validBraces("[(})", true));
console.log(validBraces("()", true));
console.log(validBraces("[]", true));
console.log(validBraces("{}", true));
console.log(validBraces("(){}[]", true));
console.log(validBraces("([{}])", true));
console.log(validBraces("(}", false));
console.log(validBraces("[(])", false));
console.log(validBraces("({})[({})]", true));
console.log(validBraces("(})", false));
console.log(validBraces("(({{[[]]}}))", true));
console.log(validBraces("{}({})[]", true));
console.log(validBraces(")(}{][", false));
console.log(validBraces("())({}}{()][][", false));
console.log(validBraces("(((({{", false));
console.log(validBraces("}}]]))}])", false));
