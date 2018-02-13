#loop Detection
#Given a circular linkedList, implement an algorithm that returns the node at the beginning of the loop

def loopDetection(LL):
    myset = set()
    current = LL.head
    while current != None:
        if current in myset:
            return current
        else:
            myset.add(current)
            current = current.next
    return False
