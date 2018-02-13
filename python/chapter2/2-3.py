#Delete Middle Node
#Implement an algorithm to delete a node in the middle of a singly linked list, given only access to that node

def deleteNode(n):
    if n == None or n.next == None:
        return None
    else:
        n.value = n.next.value
        n.next = n.next.next
        return True
