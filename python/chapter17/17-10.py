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
