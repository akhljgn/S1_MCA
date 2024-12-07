inf = False
try:
    inf = open('files/nagumo.txt')
    lines = inf.readlines()
    print(lines)
except IOError as ie:
    print(f"Error opening or reading the file: {ie}")
finally:
    if inf: inf.close()