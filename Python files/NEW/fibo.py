num = int(input("Enter a limit: "))
a, b, sum = 0, 1, 0
for i in range(num):
    a, b = b, a+b
    print(b, end="\t")
    if b % 2 == 0: sum += b
print(f'\n sum of even fibonacci numbers is {sum}')