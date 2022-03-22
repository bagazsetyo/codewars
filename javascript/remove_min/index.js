function removeSmallest(numbers) {
    var num = [...numbers];
    num.splice(num.indexOf(Math.min(...num)), 1);
    return num;
}

console.log(removeSmallest([5, 3, 2, 1, 4]));