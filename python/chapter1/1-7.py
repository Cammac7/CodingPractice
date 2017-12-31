#Rotate Matrix
#Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. 
#Bonus: Can you do this in place?

#First: not in place
#1. Reverse the order of the rows in the original array
#   i.e. [[1,2],[3,4]] -> [[3,4],[1,2]]
#2. zip consumes 1 item from the beginning of each argument and makes a tuple out of it until there are no more items
def rotate(my2dArray):
    return zip(*my2dArray[::-1])


#Bonus: Rotate in place
def rotate(arr):
    pretprint(arr)
    print("\n")
    mlength = len(arr)
    N = mlength-1
    if mlength == 2:
        JL = 1
    else:
        JL = mlength//2
    for j in range(JL):
        for i in range(N):
            temp = arr[N-i+j][j]
            arr[N-i+j][j] = arr[N+j][N-i+j]
            arr[N+j][N-i+j] = arr[i+j][N+j]
            arr[i+j][N+j] = arr[j][i+j]
            arr[j][i+j] = temp
        N = N-2
    return arr

##Helper function, prettyprint the array
def pretprint(mythingy):
    for row in mythingy:
        for el in row:
            print("{} ".format(el), end='')
        print("\r")

pretprint(rotate([[1,2,3,4,5],[6,7,8,9,0],['A','B','C','D','E'],['F','G','H','I','J'],['K','L','M','N','O']]))
