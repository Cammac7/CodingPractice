#URLify
#Write a method to replace all spaces in a string with '%20'. You are given the true length of the string

def URLify(mystring):
    mystring = mystring.strip()
    previous = ""
    newstring = ""
    for char in mystring:
        if char != ' ':
            newstring += char
        elif char == ' ' and previous != ' ':
            newstring += '%20'
        previous = char
    return newstring


print(URLify("Mr John Smith"))
print(URLify("   Mr   John Smith   "))
print(URLify("Mr   John     Smith "))

