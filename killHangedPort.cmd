@echo off

setlocal

setlocal enabledelayedexpansion

rem Run the netstat command and capture the result
for /f "tokens=*" %%i in ('netstat -ano ^| findstr :4723') do (
    set "result=%%i"
    
    if "%result%" neq "" (
        echo Result of netstat command for port 4723: %result%
        echo Kill PID %result:~69,10% on port 4723
        taskkill /PID %result:~69,10% /F
        ) else (
        echo Process Appium not running on port 4723
        call .\killNode.cmd
        )
)
endlocal