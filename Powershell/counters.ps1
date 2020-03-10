$Machines = 'charlotte-win'
Foreach ($machine in $Machine) {
    $pt = (Get-Counter -Counter "\Processor (_Total)\% Processor time" -SampleInterval 1 -MaxSmaples 3).CounterSamples.CookedValue
    $sample = 1
    foreach ($p in $pt){
    ("{3} -sample {2}: CPU is at {0} on {1}" -f [int]$p, $machine, $sample, $date)| Out-File -Append c:\output.txt
    $sample++
    }


    $RCounters = Get-COunter -ListSet * -ComputerName $machine
    Write-host("There are {0} counters on {1}" -f $RCounters.count, ($machine))
}