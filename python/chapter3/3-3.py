#Stack of Plates
#Imagine a literal stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be composed of several stacks and should create a new stack once the previous once exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack (that is, pop() should return the same values as it would if there were just a single stack).

#FOLLOW UP
#Implement a function popAt(index) which performs a pop operation on a specific substack

class StackofStacks:
    def __init__(self, capacity):
        self.sos = []
        self.cap = capacity

    def addStack(self):
        self.sos.append([])

    def peek(self,ar):
        return ar[len(ar)-1]

    def push(self, val):
        if len(self.peek(self.sos)) >= self.cap:
            self.addStack()
        self.peek(self.sos).append(val)

    def pop(self):
        if len(self.peek(self.sos)) == 0:
            self.sos.pop()
        return self.peek(self.sos).pop()

    def popAt(self, index):
        return self.sos[i].pop()
