var myString = "H";

function removeChar(inputString, inputChar){
    if(inputString.indexOf(inputChar) === -1){
        return inputString;
    }
    else{
        var remIndex = inputString.indexOf(inputChar);
        return inputString.slice(0,remIndex)+inputString.slice(remIndex+1);
    }
}

console.log(removeChar(myString, 'h'));