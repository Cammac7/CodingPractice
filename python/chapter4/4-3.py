#List of Depths
#Given a binary tree, design an algorithm which creates a linged list of all the nodes at each depth (e.g. if you have a tree with depth D you'll have D linked Lists)

class TNode:
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
        if val < self.value:
            if self.left == None:
                self.left = TNode(val)
                return self.left
            else:
                return self.left.addValue(val)
        else:
            if self.right == None:
                self.right = TNode(val)
                return self.right
            else:
                return self.right.addValue(val)

class LLNode:
    def __init__(self, data):
        self.cargo = data
        self.next = None
        self.prev = None

class DLL:
    def __init__(self):
        self.head = None

    def add(self, value):
        newNode = LLNode(value)
        if self.head == None:
            self.head = newNode
        else:
            cur = self.head
            while cur.next != None:
                cur = cur.next
            cur.next = newNode
            newNode.prev = cur

def specPrint(inList):
    for item in inList:
        cur = item.head
        while cur.next != None:
            print(cur.cargo, end="", flush=True)
            cur = cur.next
        print(cur.cargo)

def createLevelLL(node, inLLlists, level):
    if node == None:
        return
    newLL = None
    if len(inLLlists) == level:
        inLLlists.append(DLL())
        inLLlists[-1].add(node.value)
    else:
        newLL = inLLlists[level]
        newLL.add(node.value)
    createLevelLL(node.left, inLLlists, level+1)
    createLevelLL(node.right, inLLlists, level+1)

myTree = TNode(5)
myTree.addValue(8)
myTree.addValue(6)
myTree.addValue(3)
myTree.addValue(1)
myTree.addValue(9)
#myTree.addValue(7)
#myTree.addValue(4)
#myTree.addValue(2)
#myTree.addValue(10)


myTree.printTree()
AllList = []
createLevelLL(myTree, AllList, 0)
print("")
specPrint(AllList)
#print(AllList[0].cargo)
#print(AllList[1].cargo, end="", flush=True)
#print(AllList[1].next.cargo)
#print(AllList[2].cargo, end="", flush=True)
#print(AllList[2].next.cargo, end="", flush=True)

