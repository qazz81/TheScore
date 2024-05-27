@echo off

cd /d .\allure-report
FOR /F "delims=" %%i IN ('dir /b /ad-h /t:c /od') DO SET report_folder=%%i
echo Most recent report subfolder: .\allure-report\%report_folder%
cd /d ..\allure-results
FOR /F "delims=" %%i IN ('dir /b /o-d /a-d') DO (
	SET oldestFileDateTime=%%~ti
	SET oldestFile=%%i
)
rem Extract time part and convert to 24-hour format with seconds
set oldestFileTime=%oldestFileDateTime:~11,8%
set amPm=%oldestFileDateTime:~17,2%
set hour=%oldestFileTime:~0,2%
if /i "%amPm%"=="PM" (
    set /a hour=10%oldestFileTime:~0,2%+12-1000
)
set oldestFileTime=%oldestFileDateTime:~0,4%_%oldestFileDateTime:~5,2%_%oldestFileDateTime:~8,2%_%hour%_%oldestFileTime:~3,3%
echo Oldest file name: %oldestFile%
echo Oldest file time in 24h format with seconds: %oldestFileTime%
mkdir .\history\
copy /y ..\allure-report\%report_folder%\history\ .\history\
cd ..
rem Check if the consoleLogReportFolder parameter is provided - called from another .cmd
if "%consoleLogReportFolder%" neq "" (
    set "myParameter=%consoleLogReportFolder%"
) else (
    rem Use a value of oldest file in folder if the parameter is not provided - it is wrong - TBD need change. Dont run this file directly, use only run test
    set "myParameter=%oldestFileTime%"
)

rem Generate Allure report. For see the report run allure open from root folder
allure generate --clean allure-results\ -o allure-report\%myParameter%

echo The .\allure-report\%myParameter%\ folder hase been created.
