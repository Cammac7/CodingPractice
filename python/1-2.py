#Check Permutations
#Given two strings, write a method to decide if one is a permutation of the other

def checkPerms(A,B):
    if len(A) != len(B):
        return False
    hashA = {}
    hashB = {}
    for char in A:
        if char in hashA:
            hashA[char] = hashA[char]+1
        else:
            hashA[char] = 1
    for char in B:
        if char in hashB:
            hashB[char] = hashB[char]+1
        else:
            hashB[char] = 1
    for char in hashB:
        if char not in hashA:
            return False
        elif hashB[char] != hashA[char]:
            return False
    return True

print(checkPerms("monkey","neomky"))
print(checkPerms("monkey","horse"))
print(checkPerms("semtednoa","nematodes"))


