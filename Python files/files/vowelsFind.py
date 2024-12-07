import re
	
inf = open('files/newfile.txt', 'r')
text = []
for line in inf:
	words = line.strip().split()
	text.extend(words)
inf.close()

key = re.compile(r'\b[aeiouAEIOU][a-zA-Z]*[aeiouAEIOU]\b')
for line in text:
	if key.search(line):
		print(line) 