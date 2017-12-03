var myString = "raceCar";

function isPdrome(inputString){
    inputString = inputString.toLowerCase();
    if(inputString.length <= 1){
        return true;
    }
    if(inputString.endsWith(inputString.charAt(0))){
        return isPdrome(inputString.slice(1,inputString.length-1));
    }
    else{
        return false;
    }
}

var myBool = isPdrome(myString);

console.log(myBool);