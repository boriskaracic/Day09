function myForLoop1(){
    
    var evenNumbers = "";

    for (var i = 0; i <= 8; i += 2) {
        evenNumbers += i + ", ";
    }

    evenNumbers = evenNumbers.substring(0, evenNumbers.length -2);
    return evenNumbers;
}

function myForLoop2(){
    
    var evenInverseNumbers = "";

    for (var i = 8; i >= 0; i -= 2) {
        evenInverseNumbers += i + ", ";
    }

    evenInverseNumbers = evenInverseNumbers.substring(0, evenInverseNumbers.length -2);
    return evenInverseNumbers;
}



console.log(myForLoop1());
console.log(myForLoop2());


module.exports = {myForLoop1, myForLoop2};