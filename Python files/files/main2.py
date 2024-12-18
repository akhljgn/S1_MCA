import re
	
inf = open('files/email.txt', 'r')
# text = inf.readlines() not gonna work
text = []
for line in inf:
	words = line.strip().split()
	text.extend(words)
inf.close()

key = re.compile(r"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}")
for line in text:
	if key.search(line):
		print(line) 