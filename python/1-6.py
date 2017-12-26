#String Compression
#Perform basic string compression using the counts of the characters. aabccccaaa would become a2b1c5a3. If the compressed string isn't shorter than the original then return the original.

def sCompress(mystring):
    print("original:{}".format(mystring))
    current = None
    previous = None
    count = 0
    new = ""
    for char in mystring:
        current = char
        if current != previous and previous != None:
            new = new + "{}{}".format(previous,count)
            count = 1
            previous = char
        else:
            count += 1
            previous = char
    new += "{}{}".format(previous,count)
    if len(new) >= len(mystring):
        return mystring
    else:
        return new
print(sCompress('aabcccccaaa'))
print(sCompress('aabbccddeeffgghh'))
print(sCompress('abcdefght'))
print(sCompress('aaaaabbbbbdddddeeeeettttt'))



