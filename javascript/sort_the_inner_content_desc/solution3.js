const sortTheInnerContent = str =>
  str.replace(/(\w)(\w{2,})(\w)/g, (_, a, m, z) => 
    a + m.split('').sort((a, b) => b.localeCompare(a)).join('') + z
  );