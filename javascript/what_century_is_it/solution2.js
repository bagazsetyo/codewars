const whatCentury = (year) => {
    let cen = Math.ceil(year / 100);
    return cen + (cen < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][cen % 10] || 'th');
}