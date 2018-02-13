#Return Kth to last
# Implement an algorithm to find the kth to last element of a singly linked list
def KthToLast(LL, k):
    lenLL = 0
    current = LL.head
    myhash = {}
    if current = None:
        return None
    while current ! = None:
        myhash[lenLL] = current
        current = current.next
        lenLL += 1
    return myhash[lenLL-k]
