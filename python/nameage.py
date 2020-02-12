import time

start_time = time.time
print('What is your name?')
myName = input()

#while myName != 'your name':
    #print('This is not "your name". Please type "your name"?')
    #myName = input()
print('Hello, ' + myName + '. That is a good name . How old are you?')
myAge = int(input())


if myAge < 13:
    print("You're just a kid")
elif myAge == 13:
    print("you're a teenager now. That's neat I guess")
elif myAge > 13 and myAge < 30:
    print("You're adulting")
elif myAge >= 30 and myAge < 65:
    print("You're adulting.")
else:
    print("... and you're not dead yet?")
programAge = int(time.time() - start_time)

print("%s? That's funny, I'm only a %s seconds old." % (myAge, programAge))
#$print("I wish I was " + str(int(myAge) * 2) + " years old")
print("I wish I was % years olsd" % (myAge * 2))

time.sleep(3)
programAge = int(time.time() - start_time)
print("%s? That's funny, I'm only %s seconds old." % (myAge, programAge))