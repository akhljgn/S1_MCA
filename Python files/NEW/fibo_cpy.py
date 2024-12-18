num = int(input("Enter a limit: "))
a, b, so_fib = 0, 1, 0

for i in range(num):
    if a % 2 == 0: so_fib += a
    print(a, end="\t")
    a, b = b, a + b

print(f'\nSum of even Fibonacci numbers: {so_fib}')
