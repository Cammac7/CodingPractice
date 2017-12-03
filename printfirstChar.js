var mystring = "bketuucckebtszsz";

function print1Char(inputString){
    var hash = {};
    for(var i=0; i<inputString.length; i++){
        var currentChar = inputString.charAt(i);
        currentChar = currentChar.toString();
        if(hash[currentChar] === undefined){
            hash[currentChar] = 1;
        }
        else{
            hash[currentChar] = hash[currentChar]+1;
        }
    }
    for(var j=0; j<inputString.length; j++){
        var currentChar = inputString.charAt(j);
        if(hash[currentChar] === 1){
            return currentChar;
        }
    }
    return false;
}

console.log(print1Char(mystring));