#Sum Lists
#You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1s digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linkedList

def sumLists(LL1, LL2):
    total = 0
    cursum = ""
    for elist in [LL1,LL2]:
        current = elist.head
        while current != None:
            cursum = str(current.value)+current
        total = total+int(cursum)
    outlist = LL():
    newnum = str(total).reverse()
    for dig in newnum:
        outlist.add(int(dig))
    return outlist



