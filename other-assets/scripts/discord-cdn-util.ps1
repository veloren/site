# SPDX-FileCopyrightText: 2024 Javier Pérez
#
# SPDX-License-Identifier: Apache-2.0

# The Invoke-WebRequest cmdlet uses the -SkipHttpErrorCheck parameter,
# which was introduced in PowerShell 7.
#Requires -Version 7

param (
  [Parameter(Mandatory)]
  [ValidateSet("check", "download")]
  $Action
)

# Set to the root of the website repository.
# For example: "C:\Users\<user>\Git\veloren\site"
$project_path = ""
$pattern = '(?<=(src="|banner = "))https:\/\/.*?(media|cdn)\.discordapp\..*?(?=")'

$files = Get-ChildItem `
  -Path "$project_path\content\blog\" `
  -Recurse `
  -Include "*.md"

$urls = $files | Select-String `
  -Pattern $pattern `
  -AllMatches |
  Select-Object -ExpandProperty Matches |
  Select-Object -ExpandProperty Value |
  Select-Object -Unique |
  Sort-Object

$counter = 1
$total = $urls.Count

switch ($Action) {
  "check" {
    $good_urls = @()
    $bad_urls = @()

    foreach ($url in $urls) {
      $status_code = Invoke-WebRequest `
      -Uri $url `
      -Method Head `
      -SkipHttpErrorCheck `
      -HttpVersion 2.0 |
      Select-Object -ExpandProperty StatusCode
    
      Write-Host "($counter/$total) " -NoNewline
      $counter++

      if ($status_code -eq 200) {
        Write-Host "OK: " -ForegroundColor Green -NoNewline
        $good_urls += $url
      } else {
        Write-Host "ERROR: " -ForegroundColor Red -NoNewline
        $bad_urls += $url
      }
      Write-Host $url
    }
    Write-Host "Status of linked Discord CDN media in our blog:"
    Write-Host "Valid links: $($good_urls.Count)/$total"
    Write-Host "Bad links: $($bad_urls.Count)/$total"
    Write-Host 'These links have been saved into the $good_urls and the $bad_urls arrays.'
  }

  "download" {
    foreach ($url in $urls) {
      $url_channel_id = Select-String -Input $url `
        -Pattern "(?<=attachments\/)\d+" |
        Select-Object -ExpandProperty Matches |
        Select-Object -ExpandProperty Value

      $url_attachment_id = Select-String -Input $url `
        -Pattern "(?<=$url_channel_id\/)\d+" |
        Select-Object -ExpandProperty Matches |
        Select-Object -ExpandProperty Value

      $url_filename = Select-String -Input $url `
        -Pattern "(?<=$url_attachment_id\/).*?(?=(\?|\Z))" |
        Select-Object -ExpandProperty Matches |
        Select-Object -ExpandProperty Value

      $parent_directory = $project_path + "\static\discord-cdn\" + $url_channel_id + "\" + $url_attachment_id
      $media_file = $project_path + "\static\discord-cdn\" + $url_channel_id + "\" + $url_attachment_id + "\" + $url_filename
      
      if (-not (Test-Path -Path $parent_directory)) {
        New-Item -Path $parent_directory -ItemType Directory | Out-Null
      }

      Write-Host "($counter/$total) " -NoNewline
      $counter++
      $resume_result = ""

      try {
        $resume_result = Invoke-WebRequest `
        -Uri $url `
        -Method Get `
        -HttpVersion 2.0 `
        -Resume `
        -OutFile $media_file
      } catch {
        Write-Host "ERROR: " -ForegroundColor Red -NoNewline
        Write-Host "`'$url`' is no longer available."
        continue
      }
      
      # The "Microsoft.PowerShell.Commands.BasicHtmlWebResponseObject" type is returned
      # by the Invoke-WebRequest cmdlet when resuming a download on an already
      # downloaded and complete file
      if ($resume_result -is "Microsoft.PowerShell.Commands.BasicHtmlWebResponseObject" -and $resume_result.StatusCode -eq 416) {
        Write-Host "SKIPPED: " -ForegroundColor Yellow -NoNewline
        Write-Host $media_file
      } else {
        Write-Host "OK: " -ForegroundColor Green -NoNewline
        Write-Host $media_file
      }
    }
  }
}
