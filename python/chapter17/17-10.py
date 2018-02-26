#Majority Element
#A mojority element is an element that makes up more than half of the items in an array. Given a positive integers array, find the majority element. If there is no majority element, return -1. Do this in O(N) time and O(1) space

myArray = [1,2,5,9,5,9,5,5,5,6]

def majorityElement(inAr):
    myhash= {}
    for ele in inAr:
        if ele in myhash:
            myhash[ele] += 1
        else:
            myhash[ele] = 1
    leng = len(inAr)
    half = leng//2
    for num in myhash:
        if myhash[num] > half:
            return num
    return -1

print(majorityElement(myArray))

#Can it be done in O(N) time and O(1) space? Yes!

def getCandidate(inArr):
    majority = 0
    count = 0
    for n in inArr:
        if count == 0:
            majority = n
        if n == majority:
            count += 1
        else:
            count -=1
    return majority

def validate(inArr, majority):
    count = 0
    for j in inArr:
        if j == majority:
            count += 1
    if count > len(inArr)//2:
        return majority
    return -1

def spaceMajEle(inAr):
    candidate = getCandidate(inAr)
    if validate(inAr, candidate) != -1:
        return candidate
    return -1
print(spaceMajEle(myArray))
