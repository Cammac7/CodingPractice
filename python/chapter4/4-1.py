#Route Between nodes:
#Given a directed graph, design an algorithm to find out whether there is a route between two nodes

class Node:
    def __init__(self, cargo):
        self.cargo = cargo
        self.neighbors = {}

    def addNeighbor(self, neighbor, weight=1):
        self.neighbors[neighbor] = 1

class Graph:
    def __init__(self):
        self.nodelist = {}
        self.numnodes = 0

    def addNode(self, value):
        self.numnodes += 1
        newnode = Node(value)
        self.nodelist[value] = newnode

    def addEdge(self, frm, to, width):
        for d in [frm, to]:
            if d not in self.nodelist:
                self.addNode(d)
        frmNode = self.nodelist[frm]
        frmNode.addNeighbor(self.nodelist[to], width)

    def dfs(frm, to, visited):
        if frm == to:
            return True
        visited.add(frm)
        for n in frm.neighbors:
            if n not in visited:
                self.dfs(n,to,visited)
        return False

    def bfs(frm, to):
        visited = set()
        myqueue = []
        myqueue.insert(0, frm)
        while len(myqueue) > 0:
            cur = myqueue.pop()
            visited.add(cur)
            if cur == to:
                return True
            for n in cur.neighbors:
                if n not in visited:
                    myqueue.insert(0,n)
        return False
