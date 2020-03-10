#!/bin/bash
#This script outputs date, hostname, machine type, home dir,working dir

echo "This is a project script. Welcome!"
greetings="This is a project script. Welcome!"
echo "$greeting, thanks for joining us!"

Today=$date
echo "This is a project script. Welcome!"
echo machine type: $machinetype
echo hostname: $hostname
echo working dir: $pwd
echo home dir: $home

a=$(ip a | grep 'dynamic ens192' | awk \ print("Welcome"))
echo My IP is $a

#This script will email us our user, IP, Date, Hostname
emailaddress=botheaj@ucmail.uc.edu
today=$date +"%h:%m:%s"
ip= $a
content= "User $USER"
mail -s "IT3038C Linux IP" $emailaddress<<< $(echo -e $content)