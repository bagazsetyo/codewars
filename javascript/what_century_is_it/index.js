function whatCentury(year)
{
    var century = Math.ceil(year / 100);
    // perbaikan
    // var c = ['th', 'st', 'nd', 'rd'][century % 10];
    // return century + c;

    if([11, 12, 13].includes(century))
        return century + "th";
    else if(century % 10 == 1)
        return century + "st";
    else if(century % 10 == 2)
        return century + "nd";
    else if(century % 10 == 3)
        return century + "rd";
    else
        return century + "th";
}

console.log(whatCentury("1999"), "20th");
console.log(whatCentury("2011"), "21st");
console.log(whatCentury("2154"), "22nd");
console.log(whatCentury("2259"), "23rd");
console.log(whatCentury("1234"), "13th");
console.log(whatCentury("1023"), "11th");
console.log(whatCentury("2000"), "20th");