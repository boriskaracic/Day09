function inverseWhile(){
    
    var fiveNumbers = "";
    var i = 5;
    while (i>=0) {
        
        fiveNumbers += i + ",";
        i--;
        
    }
    fiveNumbers = fiveNumbers.substring(0, fiveNumbers.length -1);
    return fiveNumbers;
}


console.log(inverseWhile());
exports.moduel = inverseWhile;