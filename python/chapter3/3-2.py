#Stack Min
#How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element?

class stackMin:
    def __init__(self):
        self.stk = []
        self.minshash = {}

    def push(self, num):
        if num < self.minshash[len(self.stk)-1]:
            self.stk.append(num)
            self.minshash[len(self.stk)-1] = num
        else:
            curmin = self.minshash[len(self.stk)-1]
            self.stk.append(num)
            self.minshash[len(self.stk)-1] = curmin

    def pop(self):
        return self.stk.pop()

    def min(self):
        return self.minshash[len(self.stk)-1]

