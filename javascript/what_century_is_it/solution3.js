function whatCentury(year) {
    const century = String(Math.ceil(year / 100));
    return century + (century[0] === '1' ? 'th' : { 1: 'st', 2: 'nd', 3: 'rd' }[century[1]] || 'th');
}