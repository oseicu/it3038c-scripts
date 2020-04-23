import requests
import json

print('Please enter your zip code: ')
zip = input()

r = requests.get('https://localhost:3000' % zip)
#print(type(r.content))
data = r.json()

widgets = "widget1=blue widget2=green widget3=black widgetX=blue"
data = widgets.split()  #split string into a list

for temp in data:
    print temp

#print(type(data))
print(data['weather'][0]['description'])



