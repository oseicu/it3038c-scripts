from datetime import date

firstDate = date(2018 , 2 , 2 )
secondDate = date(2005 , 4 , 4)

delta = firstDate - secondDate

print("date between two date is:" ,delta.days)