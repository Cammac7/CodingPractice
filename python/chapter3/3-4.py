#Queue via stack
#Implement a MyQueue class which implements a queue via two stacks

class MyQueue:
    def __init__(self):
        self.initial = []
        self.reverse = []

    def add(self, value):
        self.initial.append(value)
        print("add: {}".format(value))

    def get(self):
        for i in range(len(self.initial)):
            self.reverse.append(self.initial.pop())
        out = self.reverse.pop()
        for i in range(len(self.reverse)):
            self.initial.append(self.reverse.pop())
        print("get: {}".format(out))
        return out

newq = MyQueue()
newq.add(5)
newq.add(3)
newq.add(2)
newq.add(1)
newq.add(99)
newq.get()
newq.get()
newq.get()
newq.add(45)
newq.get()
