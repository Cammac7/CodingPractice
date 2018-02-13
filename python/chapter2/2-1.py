#removeDups
#remove duplicates from an unsorted linked list
#follow-up, how would you solve the problem if a temporary buffer is not allowed?

def removeDups(LL):
    myset = set()
    current = LL.head
    previous = None
    if current == None:
        return LL
    while current.next != None:
        if current.value in myset:
            previous.next = current.next
        else:
            myset.add(current.value)
            previous = current
        current = current.next
    return LL

##Without Buffer
#O(1) space and O(n^2) time

def removeDupsNoBuff(LL):
    current = LL.head
    runner = current
    if current == None:
        return LL
    while current.next != None:
        while runner.next != None:
            if current.value == runner.next.value:
                runner.next = runner.next.next
                runner.next.previous = runner.previous
            else:
                runner = runner.next
        current = current.next
    return LL


