var mystring = "hello from the other side I must have called a thouzand times";

function duplicateChar(inputString){
    var hash = {};
    var outputString = "";
    for(var i=0; i<inputString.length-1; i++){
        var currentChar = inputString.charAt(i);
        currentChar = currentChar.toString();
        if(hash[currentChar] === true){
            if(outputString.indexOf(currentChar) === -1){
                console.log("this ran");
                outputString = outputString.concat(currentChar)+",";
            }
        }
        else{
            console.log("ORRR this ran");
            hash[currentChar] = true;
        }
    }
    console.log(hash[" "]);
    console.log(outputString);
    return outputString;
}

duplicateChar(mystring);
