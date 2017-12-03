//Find Longest Palendrome in a string
//Can this be done in O(n) time?

var myString = "racecarjoojmom";

function longPal(inputString){
    inputString = inputString.toLowerCase();
    var maxLength = 1;
    var returnPal ="";
    for(var i =0 ; i<inputString.length; i++){
        var grow = 1;
        var pal = inputString.charAt(i);
        
        var before = inputString.charAt(i-grow);
        var after = inputString.charAt(i+grow);
        
        while((before === after)&&(grow<inputString.length/2)){
            pal = inputString.charAt(i-grow) + pal + inputString.charAt(i+grow);
            grow = grow+1;
            before = inputString.charAt(i-grow)
            after = inputString.charAt(i+grow)
        }
        if(grow > maxLength){
            returnPal = pal;
            maxLength = grow;
        }
    }
    return returnPal;
}

console.log(longPal(myString));