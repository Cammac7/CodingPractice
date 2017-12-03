var myString = "He       llo World";
var testChar = " ";

function countOccur(inputString, inputChar){
    var count=[];
    var re = new RegExp(inputChar,"g");
    count = inputString.match(re);
    if(count === null){
        console.log(0);
    }
    else{
        console.log(count.length);
    }
}

countOccur(myString,testChar);