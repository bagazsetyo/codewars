function generateShape(int){
  return Array(int).fill(Array(int+1).join('+')).join('\n')
}