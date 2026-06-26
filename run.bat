@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo ===============================
echo   数学组周数据自动填报
echo ===============================

set /p WEEK="第几周？(1-5): "
if "%WEEK%"=="" set WEEK=3

REM 找文件
for %%f in (排课列表*.xls 排课列表*.xlsx) do set SCHED=%%f
for %%f in (二校数学组数据汇总*.xls) do set WPS=%%f
for %%f in (2026年度续费*.xlsx) do set RENEW=%%f
set /a PREV=%WEEK%-1
for %%f in (数学组数据统计表-宣城二校6月第%PREV%周*.xls) do set BASE=%%f
if "%BASE%"=="" for %%f in (数学组数据统计表-宣城二校6月第*周*.xls) do set BASE=%%f

if "%SCHED%"=="" echo ❌ 找不到排课列表 && pause && exit /b
if "%WPS%"==""   echo ❌ 找不到WPS汇总 && pause && exit /b
if "%BASE%"==""  echo ❌ 找不到第%PREV%周底稿 && pause && exit /b

echo.
echo 📂 底稿: %BASE%
echo 📂 排课: %SCHED%
echo 📂 WPS:  %WPS%
echo 🎯 第%WEEK%周
echo.

python auto_weekly.py "%BASE%" "%SCHED%" "%WPS%" %WEEK% "%RENEW%"

set OUT=数学组数据统计表-宣城二校6月第%WEEK%周.xls
if exist "%OUT%" start "" "%OUT%"

echo.
pause
