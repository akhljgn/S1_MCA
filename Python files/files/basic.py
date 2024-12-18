inf = False

try:
    inf = open("files/nagumo.txt", 'r')
    lines = inf.read()
    print(lines)

except IOError:
    print(IOError)
finally:
    if inf: inf.close()