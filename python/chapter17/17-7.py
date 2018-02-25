#Each year, the government releases a list of the 10000 most common baby names and their frequencies (the number of babies with that name). The only problem with this is that some names have multiple spellings. For example, "John" and "Jon" are essentially the same but would be linked separately in the list. Given two lists, one of names/frequencies, and the other of pairs of equivalent names, write an algorithm to print a new list of the true frequency of each name. Note that if John and Jon are synonyms and Jon and Johnny are synonyms, then John and Johnny are synonyms. (It is both transitive and symmetric.) In the final list, any name can be used as the "real" name.

names = {"John":15, "Jon":12, "Chris":13, "Kris":4, "Christopher":19}
synonyms = [["Jon","John"],["John","Johnny"],["Chris","Kris"],["Chris","Christopher"]]


class Node:
    def __init__(self,name,value):
        self.name = name
        self.value = value
        self.neighbors = []

class Graph:
    def __init__(self):
        self.nodelist = {}
        self.numnodes = 0

    def addNode(self, name, value):
        nnode = Node(name,value)
        self.numnodes += 1
        self.nodelist[name] = nnode

    def addEdge(self, A, B):
        for each in [A, B]:
            if each not in self.nodelist:
                self.addNode(each,0)
        self.nodelist[A].neighbors.append(self.nodelist[B])
        self.nodelist[B].neighbors.append(self.nodelist[A])

    def trueFreq(self, names, syn):
        for n in names:
            self.addNode(n, names[n])
        for s in syn:
            self.addEdge(s[0], s[1])
        final = {}
        visited = set()
        for nd in self.nodelist:
            if nd not in visited:
                final[nd] = self.dfsCount(self.nodelist[nd], visited)
        return final

    def dfsCount(self, innode, seen):
        count = innode.value
        seen.add(innode.name)
        print("node: {}, neighbors: {}".format(innode.name,[i.name for i in innode.neighbors]))
        for neigh in innode.neighbors:
            if neigh.name not in seen:
                count += self.dfsCount(neigh, seen)
        return count

nameGraph = Graph()
print(nameGraph.trueFreq(names, synonyms))
