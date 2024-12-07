l1 = input("Enter a list of numbers: ")
item = input("Enter the number to search and return count: ")
count = 0
for i in l1:
    if i == item:
        count+=1
print(count)