function myDoWhile() {
    var myNumbers = "";
    var i = 0;
    do {
        myNumbers += i + ", ";
        i++;
        
    } while (i<10);

    myNumbers = myNumbers.substring(0, myNumbers.length - 2);
    return myNumbers;
}

console.log(myDoWhile());
module.exports = myDoWhile;