var myString = "bananas";

function remDups(inputString){
    var outputString = "";
    var hash={};
    for(var i =0; i<inputString.length; i++){
        if(hash[inputString.charAt(i)]===undefined){
            hash[inputString.charAt(i)] = true;
        }
    }
    for(var e in hash){
        outputString = outputString.concat(e);
    }
    return outputString;
}

console.log(remDups(myString));