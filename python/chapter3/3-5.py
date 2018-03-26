#Sort Stack
#Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). The stack supports the following operations: push pop peek and isEmpty

class stack():
    def __init__(self):
        self.stack = []
    def pop(self):
        return self.stack.pop()
    def push(self, val):
        self.stack.append(val)
    def peek(self):
        return self.stack[len(self.stack)-1]
    def isEmpty(self):
        if len(self.stack) > 0:
            return False
        return True

def sortStack(inStack):
    tempS = stack()
    temp = 0
    count = 0
    while inStack.isEmpty() == False:
        temp = inStack.pop()
        while tempS.isEmpty() == False and tempS.peek() > temp:
            inStack.push(tempS.pop())
        tempS.push(temp)
    inStack.stack = tempS.stack


mStack = stack()
mStack.push(2)
mStack.push(1)
mStack.push(6)
mStack.push(3)
mStack.push(5)
print(mStack.stack)
sortStack(mStack)
print(mStack.stack)


    

