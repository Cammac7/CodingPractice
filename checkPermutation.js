var stringA = "abc";
var stringB = "abc";

function isPerm(inputA, inputB){
    for(var e in inputA){
        if(inputB.indexOf(inputA[e]) > -1){
            var index = inputB.indexOf(inputA[e]);
            inputB = inputB.slice(0,index)+inputB.slice(index+1);
        }
        else{
            return false;
        }
    }
    return true;
}

console.log(isPerm(stringA,stringB));