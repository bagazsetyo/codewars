var sd = 'a123Sa';
var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,6}$/;
var tes = pattern.test(sd);
console.log(tes);