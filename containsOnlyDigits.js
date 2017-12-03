var myString = "11314238742364";

function onlyDigits(inputString){
    var checkString;
    checkString = inputString.search(/\D/);
    if(checkString === -1){
        return true;
    }
    else{
        return false;
    }
}

console.log(onlyDigits(myString));