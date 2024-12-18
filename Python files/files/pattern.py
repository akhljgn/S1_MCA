import re
inf = open("files/abc.txt", "r")
text = inf.readlines()
inf.close()

key = re.compile(r'a')
for line in text:
	if key.search(line):
		print(line)