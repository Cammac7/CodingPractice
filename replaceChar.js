var myString = "Hello World";
var findChar = ' ';
var replaceChar = '%20';

function replace(inputString, inputCharA, inputCharB){
    var outputString;
    
    var re = RegExp(inputCharA,"gi");
    outputString = inputString.replace(re,inputCharB);
    console.log(outputString);
}

replace(myString,findChar,replaceChar);