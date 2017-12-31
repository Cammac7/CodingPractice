#One Away
#There are 3 types of edits: insert a char, remove a char, or replace a char. Given two strings, write a function to check if they are one edit away (or zero) away from eachother.

def oneAway(s1, s2):
    if len(s1)-len(s2) > 1:
        return False
    if len(s1)-len(s2) < -1:
        return False
    myhash = {i:True for i in s1}
    oneZAway = False
    for j in s2:
        if j not in myhash:
            if oneZAway == True:
                return False
            else:
                oneZAway = True
    return True

print(oneAway("pale","ple"))
print(oneAway("pales","pale"))
print(oneAway("pale","bale"))
print(oneAway("pale","bake"))
