var myString = "aabccdcccaaa";

function compress(inputString){
    var outputString = "";
    for(var i = 0; i<inputString.length;i++){
        var countTimes = 1;
        outputString = outputString.concat(inputString[i]);
        while(inputString[i]===inputString[i+1]){
            countTimes = countTimes+1;
            i++;
        }
        outputString = outputString.concat(countTimes);
    }
    console.log(inputString);
    return (outputString.length < inputString.length) ? outputString : inputString;
}

console.log(compress(myString));