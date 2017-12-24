var mystringA = "pale";
var mystringB = "ple";

function oneAway(inputA, inputB){
    var differences = 0;
    for(var e in inputA){
        if(differences > 1){
            return false;
        }
        var index = inputB.indexOf(inputA[e]);
        if(index > -1){
            inputB = inputB.slice(0,index)+inputB.slice(index+1);
        }else{
            differences++;
        }
    }
    return true;
}

console.log(oneAway("pale","bake"));