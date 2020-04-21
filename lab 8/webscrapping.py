from bs4 import BeautifulSoup
import requests, re
data = "Hello. My email is oseicu@mail.uc.edu. Please contact me!"
data = requests.get("https://www.adidas.com/us/men-athletic_sneakers.html")
p = re.compile('[A-Za-z0-9_%.-]+@[A-z0-9_%.-]+\.[A-z0-9]{2,}')
print(p.search(data).group())

r = requests.get("http://webscraper.io/test-sites/e-commerce/allinone/phones").content
soup = BeautifulSoup(data, 'html.parser')
span = soup.find("h1", {"class":"product_information_title__2rG9M product_title gl-heading gl-heading--m"})
title = span.text
span = soup.find("span", {"class":"gl-price__valus gl-price__value--sale"})
price = span.text
print("Item %s has price %s" % (title, price))
tags =soup.findAll("a", {"href":re.compile('(allinone)')})
for a in tags:
    a = p.findAll("p", {"class":pull-right})
    print(a[0].string)
print(type (soup))
print(soup.prettify()[:100])
for link in soup.find all ('a', attrs={'href':re.compile("^http://github.com")}): print(link.get('href'))
