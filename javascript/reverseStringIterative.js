var myString = "Hello World";

function reverseString(inputString){
    var outputString = "";
    for(var i = inputString.length-1; i>=0; i--){
        outputString = outputString.concat(inputString.charAt(i));
    }
    return outputString;
}

console.log(reverseString(myString));