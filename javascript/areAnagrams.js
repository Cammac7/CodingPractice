var stringa = "hellob ucket face";
var stringb = "ABCCEE EFHKLLOTU";


function areAnagrams(inputone, inputtwo){
    inputone = inputone.toLowerCase();
    inputtwo = inputtwo.toLowerCase();
    
    if(inputone.length !== inputtwo.length){
        return false;
    }
    else{
        var hash = {};
        for(var i=0; i<inputone.length; i++){
            var currentChar = inputone.charAt(i);
            currentChar = currentChar.toString();
            hash[currentChar] = true;
        }
        for(var j=0; j<inputtwo.length; j++){
            var twoChar = inputtwo.charAt(j);
            twoChar = twoChar.toString();
            if(hash[twoChar]===true){
            }
            else{return false;}
        }
    }
    return true;
}

console.log(areAnagrams(stringa, stringb));

