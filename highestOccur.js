var myString = "Hellhhhhho World";

function maxOccur(inputString){
    inputString = inputString.toLowerCase();
    var hash={};
    for(var i=0; i<inputString.length;i++){
        if(hash[inputString.charAt(i)]===undefined){
            hash[inputString.charAt(i)] = 1;
        }
        else{
            hash[inputString.charAt(i)] = hash[inputString.charAt(i)]+1;
        }
    }
    var maxNum = 0;
    var outChar;
    for(var e in hash){
        if(hash[e] > maxNum){
            maxNum = hash[e];
            outChar = e;
        }
    }
    return outChar;
}

console.log(maxOccur(myString));