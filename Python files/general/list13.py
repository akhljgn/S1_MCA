string = input("Enter a string: ").split(" ")
item = input("Enter a word: ")
print("Available" if item in string else "Not Available")