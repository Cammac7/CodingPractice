#Rotate Matrix
#Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. 
#Bonus: Can you do this in place?

#First: not in place
#1. Reverse the order of the rows in the original array
#   i.e. [[1,2],[3,4]] -> [[3,4],[1,2]]
#2. zip consumes 1 item from the beginning of each argument and makes a tuple out of it until there are no more items
def rotate(my2dArray):
    return zip(*my2darray[::-1])


#Bonus: Rotate in place
