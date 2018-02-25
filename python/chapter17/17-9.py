#kth multiple
#Design an algorithm to find the kth number such that the only prime factors are 3, 5, and 7. Note that 3,5 and 7 do not have to be factors but it should not have any other prime factors. For example the first seven multiples would be (in order) 1,3,5,7,9,15,21

def kthmultiple(k):
    mylist = [1,3,5,7,9,15,21]
    for i in mylist:
        if len(mylist) > k:
            return mylist[k]
        else:
            low = 3*i
            med = 5*i
            high = 7*i
            for num in [low, med, high]:
                if num > mylist[len(mylist)-1]:
                    mylist.append(num)

print(kthmultiple(25))

