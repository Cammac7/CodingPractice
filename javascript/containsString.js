var myString = "Hello World";

function contains(inputString, searchString){
    if(inputString.search(searchString) !== -1){
        return true;
    }
    else{
        return false;
    }
}

console.log(contains(myString, "z"));