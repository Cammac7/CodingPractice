var myString = "Hello from the other side I must have called";

function reverseString(inputString){
    var outputString = "";
    if(inputString.length === 0){
        return outputString;
    }
    if(inputString.length === 1){
        return inputString;
    }
    else{
        outputString = (inputString.charAt(inputString.length-1)).toString()+ reverseString(inputString.slice(1,inputString.length-1))+inputString.charAt(0);
    }
    return outputString;
}

console.log(reverseString(myString));