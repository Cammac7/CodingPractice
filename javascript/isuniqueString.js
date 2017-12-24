var myString = "abcdefghijklmnoa";

function isUnique(inputString){
    var hash = {};
    for(var e in inputString){
        if(hash[inputString[e]]===undefined){
            hash[inputString[e]] = true;
        }
        else{
            return false;
        }
    }
    return true;
}


console.log(isUnique(myString));