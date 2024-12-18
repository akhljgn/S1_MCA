list = input("Enter a list of numbers: ").split()
for i in list:
    if i != "239":
        if not int(i) % 2:
            print(i ,end=",")
    else:
        break