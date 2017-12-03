//Print all duplicate chars in a string and the number of times they appear

var myString = "bucketsb";

function duplicateChar(inputString){
    var hash = {};
    var currentChar;
    for(var i = 0; i<inputString.length; i++){
        currentChar = inputString.charAt(i);
        currentChar = currentChar.toString();
        if(hash[currentChar] !== undefined){
            hash[currentChar] = hash[currentChar]+1;
        }
        else{
        hash[currentChar] = 1;
        }
    }
    for(var e in hash){
        if(hash[e] > 1){
        console.log(e+": "+hash[e]+"\n");
        }
    }
}

duplicateChar(myString);