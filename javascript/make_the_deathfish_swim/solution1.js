const parse = data => {
    const Commands = {
        INCREMENT:  'i',
        DECREMENT:  'd',
        SQUARE:     's',
        OUTPUT:     'o'
    }
  
    var outputs = [],
        value = 0;
    
    data.split('').forEach(command => {
      switch(command) {
        case Commands.INCREMENT:  value++;                   break;
        case Commands.DECREMENT:  value--;                   break;
        case Commands.SQUARE:     value = Math.pow(value, 2);break;
        case Commands.OUTPUT:     outputs.push(value);       break;
      }
    });
    
    return outputs;
  }