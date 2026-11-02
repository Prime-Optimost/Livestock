<#
  Replaces the placeholder origin (https://your-domain.example) in the site's
  HTML, sitemap, robots.txt and JSON files with your real domain.

  Usage:
    powershell -ExecutionPolicy Bypass -File ./set-domain.ps1 thegoldenshieldranch.com
    powershell -ExecutionPolicy Bypass -File ./set-domain.ps1 https://thegoldenshieldranch.com

  Run this once, immediately before deploying. It does not touch this script
  or DEPLOY.md, so the instructions stay readable.
#>
param(
  [Parameter(Mandatory = $true, Position = 0)]
  [string]$Domain
)

$ErrorActionPreference = "Stop"

$origin = $Domain.Trim().TrimEnd("/")
if ($origin -notmatch "^https?://") {
  $origin = "https://$origin"
}
if ($origin -notmatch "^https?://[^/]+$") {
  throw "Use a domain only, for example: thegoldenshieldranch.com"
}

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$placeholder = "https://your-domain.example"
$extensions = @("*.html", "*.xml", "*.txt", "*.json", "*.webmanifest")
$skip = '\\(\.jury|node_modules|\.git)\\'
$utf8 = New-Object System.Text.UTF8Encoding($false)

$files = Get-ChildItem -LiteralPath $root -Recurse -File -Include $extensions |
  Where-Object {
    $_.FullName -notmatch $skip -and
    $_.Name -notin @("set-domain.ps1", "DEPLOY.md")
  }

$changed = 0
foreach ($file in $files) {
  $text = [System.IO.File]::ReadAllText($file.FullName)
  if ($text.Contains($placeholder)) {
    $text = $text.Replace($placeholder, $origin)
    [System.IO.File]::WriteAllText($file.FullName, $text, $utf8)
    $changed++
    Write-Host "Updated $($file.FullName.Substring($root.Length + 1))"
  }
}

Write-Host ""
Write-Host "Origin set to $origin in $changed file(s)."
if ($changed -eq 0) {
  Write-Host "The placeholder was not found. Has this already been run?"
}
