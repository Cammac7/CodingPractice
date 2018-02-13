#Intersection
#Given two (singly) linkedLists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth node of the first linked list is the exact same node (by reference) as the jth node of the second linkedList, then they are intersecting

def intersection(LL1,LL2):
    def myset = set()
    current = LL1.head
    while current != None:
        myset.add(current)
        current = current.next
    current = LL2.head:
    while current != None:
        if current in myset:
            return current
        else:
            current = current.next
    return False
