#Is Unique
#Implement an algorithm to determine if a string has all unique chracters. What if you cannot use additional data structures?

#With Structures:
def uniqueChars(inputstring):
    check = set()
    for char in inputstring:
        if char in check:
            return False
        else:
            check.add(char)
    return True


#Without Additional DS
def uniChars(inputstring):
    for i, char in enumerate(inputstring):
        substring = (inputstring[:i]+inputstring[i+1:])
        if char in substring:
            return False
    return True

print(uniqueChars("hello"))
print(uniqueChars("nice dog"))
print(uniqueChars("chupacabra"))
print("-----")
print(uniChars("hello"))
print(uniChars("nice dog"))
print(uniChars("chupacabra"))

