@echo off
echo Installing packages...
call npm install
if errorlevel 1 (
    echo Installation failed!
    pause
    exit /b 1
)
echo Starting WebServer...
start "Browser" "http://localhost:3000"
call npm run dev
