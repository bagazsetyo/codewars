function partlist(arr) {
    return arr.map(function(item, index){
        return [arr.slice(0,index + 1).join(" "), arr.slice(index + 1).join(" ")];
    }).slice(0,-1);
}

console.log(partlist(["cdIw", "tzIy", "xDu", "rThG"]), [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]])