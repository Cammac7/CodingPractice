dictionary = set()
f = open("words_alpha.txt", "r")
lines = f.readlines()
for i in lines:
    dictionary.add(i.rstrip())

intext = "imlookcardrivejess"
trackhash = {}
def respace(inputStr):
    if inputStr in trackhash:
        return trackhash[inputStr]
    if inputStr in dictionary:
        return 0
    if len(inputStr) < 2:
        return 1
    rejectmin = float("inf")
    mini = 0
    for i in range(1,len(inputStr)):
        trackhash[inputStr] = respace(inputStr[0:i]) + respace(inputStr[i:])
        if trackhash[inputStr] < rejectmin:
            mini = i
            rejectmin = trackhash[inputStr]
    return rejectmin

trackhashW = {}
def respaceW(inputStr):
    if inputStr in trackhashW:
        return trackhashW[inputStr]
    if inputStr in dictionary:
        return inputStr
    if len(inputStr) < 2:
        return inputStr
    rejectmin = float("inf")
    mini = 0
    for i in range(1,len(inputStr)):
        trackhashW[inputStr] = respaceW(inputStr[0:i])+" "+respaceW(inputStr[i:])
        if len(trackhashW[inputStr]) == (2*len(inputStr))-1:
            trackhashW[inputStr] = inputStr
        #if trackhashW[inputStr] < rejectmin:
        #    mini = i
        #    rejectmin = trackhashW[inputStr]
    return trackhashW[inputStr]
    #return rejectmin


print(respaceW(intext))
