infile= False 
outfile = False

try:
    infile = open("files/nagumo.txt", "r")
    lines = infile.readlines()
    outfile = open ("files/outfile.txt", "w")
    for i in range(0, len(lines), 2):
        outfile.write(lines[i])
    print("The first file is")
    for line in lines:
        print(line)
    print("\nThe second file is")
    outfile = open ("files/outfile.txt", "r")
    for line in outfile:
        print(line)

except IOError as ie:
    print(ie)
finally:
    if infile: infile.close()
    if outfile: outfile.close()
