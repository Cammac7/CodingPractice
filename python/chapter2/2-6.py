#Palindrome
#Implement a function to check if a linked list is a palindrome

def isPalindrome(LL):
    newLL = LL()
    trackvals = []
    current = LL.head
    count = 0
    while current != None:
        trackvals.insert(0, current.value)
        current = current.next
        count += 1
    A = newLL.head
    B = LL.head
    for i in range(count//2):
        if A == None and B == None:
            return True
        if A.value != B.value:
            return False
        else:
            A = A.next
            B = B.next

    

