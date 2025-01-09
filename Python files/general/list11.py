a = input("Enter a string: ")
if len(a) > 2:
    print(a[:2]+a[-2:])
else:
    print((a+a if len(a) == 2 else "NULL"))