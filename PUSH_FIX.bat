@echo off
cls
echo.
echo 🔧 GIT FIX + PUSH...
echo.
cd /d "%~dp0"
echo Starte Git...
git config user.name "369Anjelic"
git config user.email "dev@unwritten.studio"
echo.
echo Stehe auf main Branch...
git checkout -b main 2>nul || git checkout main
echo.
echo Adde alle Dateien...
git add -A
echo.
echo Commit...
git commit -m "Fix: Push GitHub Pages" 2>nul || echo "Keine neuen Changes"
echo.
echo PUSH zu GitHub...
git push -u origin main
if %errorlevel% equ 0 (
    echo.
    echo ✅ PUSH ERFOLGREICH!
    echo.
    echo Bot wird live in 2-3 Minuten:
    echo https://369Anjelic.github.io/KasparHauserBot/
    echo.
) else (
    echo.
    echo ❌ Push fehlgeschlagen
    echo.
)
pause
