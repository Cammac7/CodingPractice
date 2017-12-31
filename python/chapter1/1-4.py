#Palindrome Permutation:
#Given a string, write a function to check if it is a permutation of a palindrome. The palindrome does not need to be limited to dictionary words

def palperm(mystring):
    mystring = mystring.lower()
    myhash = {}
    singles = 0
    for char in mystring:
        if char in myhash:
            myhash[char] = myhash[char]+1
        else:
            myhash[char] = 1
    for num in myhash:
        if num != ' ':
            if myhash[num]  % 2 == 1:
                singles += 1
    if singles > 1:
        return False
    else:
        return True

print(palperm("tact coa"))
print(palperm("cameron"))
print(palperm("arecacr"))
