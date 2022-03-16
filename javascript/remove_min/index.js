function removeSmallest(numbers) {
    var num = [...numbers];
    num.splice(num.indexOf(Math.min(...num)), 1);
    return num;
}