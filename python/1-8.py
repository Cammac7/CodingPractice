#Zero Matrix
#Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0

def zeromatrix(my2darray):
    columns = []
    rows = []
    for index, row in enumerate(my2darray):
        for col, ele in enumerate(row):
            if ele == 0:
                columns.append(col)
                rows.append(index)
    for col in columns:
        for row in my2darray:
            row[col] = 0
    for r in rows:
        for idx,ele in enumerate(my2darray[r]):
            my2darray[r][idx] = 0

##Helper function, prettyprint the array
def pretprint(mythingy):
    for row in mythingy:
        for el in row:
            print("{} ".format(el), end='')
        print('\r')
    print('----------')

#tests:
myMatrix = [[0,2,3,4],[5,6,7,8],[9,0,4,6],[2,7,4,1],[9,9,5,5]]
pretprint(myMatrix)
zeromatrix(myMatrix)
pretprint(myMatrix)
