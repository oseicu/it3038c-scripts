#This is a script to send an email with info about our server

#FUNCTION THAT RETURNS AN ip AdDrEsS StArTiNg wItH 192
function getIP{
   (get-netipaddress).ipv4address | Select-String "192*"
}

#SET the ip VARIABLE
$IP = getIP

#set the Body variable
$BODY = "This machine's IP is $IP. User is $USER. Hostname is $env:computername PowerShell Version $HOST.Version.Major Today's Date is $get-date"
Write-Host ($Body)

#build and send mail
Send-MailMessage -To "botheaj@ucmail.uc.edu" -From "nanayaaosei49@gmail.com" -Subject "IT3038C Windows SysInfo" -Body $BODY -SmtpServer smtp.gmail.com -port 587 -UseSSL -Credential (Get-Credential)

#confirm we reached the end
Write-Host("Email sent")