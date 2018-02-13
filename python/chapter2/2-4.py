#Partition
#Write code to partition a linkedList around a value x, such that all nodes less than x come before all nodes greater than or equal to x. If x is contained within the list, the values of x only need to be after the elements less than x
def partition(LL, part):
    myhash = {}
    firstHalfLL = LL()
    endFirst = None
    secondHalfLL = LL()
    current = LL.head
    if current = None:
        return None
    while current != None:
        if current.value < part:
            endFirst = firstHalfLL.add(current.value)
        else:
            secondHalfLL.add(current.value)
        current = current.next
    endFirst.next = secondHalfLL.head
    return firstHalfLL

