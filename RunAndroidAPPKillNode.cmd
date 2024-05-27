@echo off
REM call npx wdio run .\config\wdio.android.conf.js | tee .\report\%consoleLogReportFolder%\consoleLog.txt

setlocal

echo Checking port 4723 and kill process there
REM call .\killNode.cmd
call killHangedPort.cmd

echo Run test
@REM set consoleLogReportFolder=report_%date:~0,4%_%date:~5,2%_%date:~8,2%_%time:~0,2%_%time:~3,2%_%time:~6,2%
@REM mkdir '.\report\%consoleLogReportFolder%'
@REM echo consoleLog folder is .\report\%consoleLogReportFolder%\
call npx wdio run .\config\wdio.android.conf.js

@REM echo Generate Allure report 
@REM call .\GenerateAllureReport.cmd

@REM echo Copy consolelog file to Allure Report folder
@REM cd /d .\allure-report

@REM FOR /F "delims=" %%i IN ('dir /b /ad-h /t:c /od') DO SET report_folderLog=%%i

@REM echo Most recent Allure Report: %report_folderLog%
@REM echo ConsoleLog folder is .\report\%consoleLogReportFolder%\
@REM copy /y ..\report\%consoleLogReportFolder%\consoleLog.txt ..\allure-report\%report_folderLog%\

endlocal