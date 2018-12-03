import json
from difflib import get_close_matches

data = json.load(open("data.json"))

def translate(word):
    word = word.lower()
    if word in data:
        return data[word]
    elif word.title()
        return data[word.title]
    elif word.upper():
        return data[word.upper]
    elif len(get_close_matches(word, data.keys())) > 0:
        yn = input("Quisiste decir esto %s ? ingrese y o n" % get_close_matches(word, data.keys())[0])
        if yn == "y":
            return data[get_close_matches(word, data.keys())[0]]
        else:
            return "No existe la palabra"
    else:
        return "No existe la palabra"

word = input("Introduzca la palabra:")

output = translate(word)

if type(output) == list:
    for item in output:
        print(item)
else:
    print(output)

