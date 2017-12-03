var stack = []
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);

function reverseStack(inputStack){
    var myLength = inputStack.length;
    var flipStack = [];
    for(var i=0; i<=myLength; i++){
        var temp = inputStack.pop();
        flipStack.push(temp);
    }
    return flipStack;
}

var printStack = stack.toString();
document.write(printStack);
var reversedStack = reverseStack(stack);
var prevStack = reversedStack.toString();
document.write("<br>");
document.write(prevStack);
