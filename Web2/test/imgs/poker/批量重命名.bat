@echo off
setlocal enabledelayedexpansion
set count=4
for /f %%i in ('dir /b *.jpg') do (
    set /a count+=4
    echo ¸ÄÃû£º%%i !count!
    rename %%i !count!.jpg
)