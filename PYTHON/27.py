a = input("Enter a list of numbers: ").split()
even, odd = 0, 0
for i in a:
    if int(i) % 2:
        odd+=1
    else:
        even+=1
print('even: ',even,'\nodd: ',odd)