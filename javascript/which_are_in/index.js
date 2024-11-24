function inArray(array1,array2){
    var result = [];
    for(var i = 0; i < array1.length; i++){
        for(var j = 0; j < array2.length; j++){
            if(array2[j].includes(array1[i])){
                result.push(array1[i]);
                break;
            }
        }
    }
    return result.sort();
}


a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// a1 = ["xyz", "live", "strong"]
// console.log(inArray(a1, a2), ["live", "strong"])

// a1 = ["live", "strong", "arp"]
// console.log(inArray(a1, a2), ["arp", "live", "strong"])

// a1 = ["tarp", "mice", "bull"]
// console.log(inArray(a1, a2), [])