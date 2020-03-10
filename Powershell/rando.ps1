$RANDO=0
$lOGfilE = "c:\logs\rando.log"
for($i=0; $i -lt 5; $i++) {
  $RANDO=Get-RAndom -Maximum 1000 -Minimum 1
  Write-Host($RANDO)
  Add-Content $lOgFile "INFO: Random number is ${RANDO}"
  }