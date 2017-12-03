var num1 = 5;
var num2 = 20;

function recursiveMult(inputA, inputB){
    if(inputB === 1){
        return inputA;
    }
    else{
        return inputA+recursiveMult(inputA,inputB-1);
    }
}

console.log(recursiveMult(50,20));