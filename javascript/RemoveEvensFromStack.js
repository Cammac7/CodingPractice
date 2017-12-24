var myStack = [];

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.push(6);
myStack.push(7);
myStack.push(8);
myStack.push(9);

function removeEven(inputStack){
    var sLength = inputStack.length;
    var holdStack = [];
    
    for(var i=0; i<=sLength; i++){
        var temp = inputStack.pop();
        if(temp % 2){
            holdStack.push(temp);
        }
    }
    var hLength = holdStack.length;
    for(var j=0; j<=hLength; j++){
        var temp2 = holdStack.pop();
        inputStack.push(temp2);
    }
    return inputStack;
}

var printStack = myStack.toString();
document.write(printStack);
document.write(removeEven(myStack).toString())

