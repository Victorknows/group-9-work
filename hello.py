def reverse_words(str):
    words = str.split()
    words.reverse()  
    joinString = " ".join(words)
    return joinString

print(reverse_words("Its Victor and Linda"))
