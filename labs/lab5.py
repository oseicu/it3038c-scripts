import datetime

Year = int(input("Please enter the year you were born"))

Month = int(input("Please enter the number of the month you were born. For example 3 = March"))

Day = int(input("Please enter the day you were born"))

DOB = datetime.datetime(Year,Month,Day)
Age = (datetime.datetime.now()-DOB)

print("You are" + str(Age.days) + "days old")

convertdays = int(Age.days)
AgeYears =Convertdays/365

pront("Or" + str(AgeYears) + " years old to be less precise!")
