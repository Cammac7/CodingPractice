#Sparse Similarity
#The similarity of two documents (each with distinct words) is defined to be the size of the intersection divided by the size of the union. For example, if the documents consist of integers, the similarity of {1, 5, 3} and {1, 7, 2, 3} is 0.4, because the intersection has size 2 and the union has size 5

#We hace a long list of documents (with distinct values and each with an associated ID) where the similarity is believed to be "sparse". That is, any two arbitrarily selected documents are very likely to have similarity 0. Design an algorithm that returns a list of pairs of document ids and the associated similarity.
#Print only the pairs with similarity greater than 0. Empty documents should not be printed at all. For simplicity you may assume each document is represented as an array of distinct integers.

pairs = {13:{14, 15, 100, 9, 3}, 16:{32, 1, 9, 3, 5}, 19:{15, 29, 2, 6, 8, 7}, 24:{7, 10}}

def sparseSimilarity(inDict):
    final = {}
    contains = {}
    for key, value in inDict.items():
        for n in value:
            if n in contains:
                contains[n].add(key)
            else:
                contains[n] = {key}
    #this way, don't need to iterate over all others, only over collisions
    visited = set()
    for val in inDict:
        visited.add(val)
        itsnums = inDict[val]
        similarities = set()
        for j in itsnums:
            similarities = similarities | contains[j]
        for ot in similarities:
            if ot not in visited:
                inter = len(inDict[val] & inDict[ot])
                uni = len(inDict[val] | inDict[ot])
                if inter > 0 and uni > 0:
                    sim = inter/uni
                    if sim > 0:
                        final[(val,ot)] = sim
    print(final)

sparseSimilarity(pairs)


