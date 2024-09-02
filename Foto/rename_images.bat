@echo off
setlocal enabledelayedexpansion
set /a count=1
cd /d "X:\Skibidi\Foto"
for %%f in (*.jpg) do (
    ren "%%f" "Image!count!%%~xf"
    set /a count+=1
)
