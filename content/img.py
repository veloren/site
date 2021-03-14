import os
import os.path
import re
import json
import urllib.request

lines = ""
for filename in [f for f in os.listdir("./") if os.path.isfile(f)]:
    if filename == "img.py":
        continue
    
    with open(filename, 'r') as f:  # open in readonly mode
        for line in f.readlines():
            lines += line

links = re.findall(r'src="(.*discordapp.*?)"', lines)

# Remove query strings
links = [l.split("?")[0] for l in links]
print(len(links))

opener = urllib.request.build_opener()
opener.addheaders = [('User-agent', 'Mozilla/5.0')]
urllib.request.install_opener(opener)

filenames = {}
if os.path.exists('files/filenames.json'):
    with open('files/filenames.json', 'r') as f:
        filenames = json.load(f)

for i, link in enumerate(links):
    print("link", link)
    if link in filenames.keys():
        continue

    extension = link.split(".")[-1].lower()
    urllib.request.urlretrieve(link, "files/{}.{}".format(i, extension))

    filenames[link] = "{}.{}".format(i, extension)

    with open('files/filenames.json', 'w') as json_file:
        json.dump(filenames, json_file)