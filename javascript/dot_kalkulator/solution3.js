function dotCalculator (equation) {
  const [num1, op, num2] = equation.split(" ")
  if(op == "+" || op=="-" || op == "*" || op=="//") return ".".repeat(eval(num1.length + op[0] + num2.length))
}