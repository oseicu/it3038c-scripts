
#!/bin/bash
# This sscripts outputs the date, time of a machine,Hostname of a machine
#echo `This is a project script. Welcome!`
greeting="This is a project script. Welcome!"
#echo `$greeting, thanks for joning us!`

Today=$(date)
#echo `This is a project script. Welcome!`
#echo Machine Type: $MACHTYPE
#echo Hostname: $HOSTNAME
#echo Working Dir: $PWD
#echo Home Dir: $HOME


#This script will email us our user, IP, hostname and today's date.
emailaddress="babyyhaa30@gmail.com"
today=$ date +"%H:%M:%S"
ip= $a
content="Machine Type $MACHTYPE, Hostname $HOSTNAME, Working Dir $PWD, Home Dir $HOME"
echo $content
mail -s "IT3038C Linux IP" $emailaddress<<< $(echo -e $content)
