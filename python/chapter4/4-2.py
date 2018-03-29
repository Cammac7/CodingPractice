#Minimal Tree
#Given a sorted (increasing order) arry with unique integer elements, write an algorithm to create a binary search tree wih minimal height

theAr = [1,2,3,4,5,6,7,8,9]
smalAr = [1,2,3,4]





class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
    
    def printTree(self):
        myqueue = []
        myqueue.insert(0,self)
        count = 0
        row = 1
        while len(myqueue) > 0:
            cur = myqueue.pop()
            if cur == "N":
                print(cur, end="", flush=True)
                count +=1
            else:
                print(cur.value, end="", flush=True)
                count += 1
                for j in [cur.left, cur.right]:
                    if j:
                        myqueue.insert(0,j)
                    else:
                        myqueue.insert(0,"N")
            if count == row:
                print("")
                row = row*2
                count = 0

    def addValue(self, val):
        if val > self.value:
            if self.left == None:
                self.left = Node(val)
                return self.left
            else:
                return self.left.addValue(val)
        else:
            if self.right == None:
                self.right = Node(val)
                return self.right
            else:
                return self.right.addValue(val)

def createMinimalBST(inAr):
    print(inAr)
    if len(inAr) == 0:
        return None
    elif len(inAr) == 1:
        return Node(inAr[0])
    half = len(inAr)//2
    root = Node(inAr[half])
    left = inAr[:half]
    right = inAr[half+1:]
    root.left = createMinimalBST(left)
    root.right = createMinimalBST(right)
    return root

myBST = createMinimalBST(theAr)
myBST.printTree()


