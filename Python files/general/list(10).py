a = input("Enter a string: ")
a1 = a.split(" ")
max_len = len(max(a1, key = len))
long = sum(word for word in a1 if len(word) == max_len)
if long > 1:
    print("Bingo")
else:
    print(max_len)