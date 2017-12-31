#String Rotation
#Assume you have a method "isSubstring" which checks if one word is a substring of another. Given two strings s1 and s2 write code to check if s2 is a rotation of s1 using only one call to isSubstring

def isSubstring(find, totalString):
    if find in totalString:
        return True
    else:
        return False

def isRotation(A,B):
    s1 = A+A
    if isSubstring(B,s1):
        return True
    return False

#tests

print(isRotation("waterbottle","erbottlewat"))
print(isRotation("waterbottle","erbottleswat"))

