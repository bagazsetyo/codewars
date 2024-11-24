function findUniq(arr) {
return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );
}