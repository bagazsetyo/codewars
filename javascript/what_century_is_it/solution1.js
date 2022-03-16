function whatCentury(year)
{
  var century = Math.ceil(year/100);
  return century + (century < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][century % 10] || 'th');
}

console.log(whatCentury("1999"), "20th");
console.log(whatCentury("2011"), "21st");
console.log(whatCentury("2154"), "22nd");
console.log(whatCentury("2259"), "23rd");
console.log(whatCentury("1234"), "13th");
console.log(whatCentury("1023"), "11th");
console.log(whatCentury("2000"), "20th");