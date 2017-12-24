var myString = "Hello World";


function takeSpace(inputString){
    inputString = inputString.replace(/ /g, "%20");
    return inputString;
}


console.log(takeSpace(myString));
