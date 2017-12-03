var myString = "xyz";
//includes duplicates
function printPermut(inputString){
    permutation("",inputString);
}


function permutation(firstChar,restString){
    if(restString.length === 0){
        console.log(firstChar);
    }
    else{
        for(var i =0; i<restString.length; i++){
            permutation(firstChar+restString.charAt(i),restString.substring(0, i) + restString.substring(i+1, restString.length));
        }
    }
}

printPermut(myString);