# Apply Branch Protection (run by admin)
# Requires: gh auth login with repo admin scope

param(
  [string]$Owner = "shiroonigami23-ui",
  [string]$Repo = "pm-simulation-students"
)

$groupPayload = @{
  required_status_checks       = @{ strict = $true; contexts = @() }
  enforce_admins               = $true
  required_pull_request_reviews = $null
  restrictions                 = $null
} | ConvertTo-Json -Depth 10 -Compress

$mainPayload = @{
  required_status_checks = @{ strict = $true; contexts = @() }
  enforce_admins         = $true
  required_pull_request_reviews = @{
    dismiss_stale_reviews = $true
    required_approving_review_count = 1
  }
  restrictions = $null
} | ConvertTo-Json -Depth 10 -Compress

$groupFile = ".tmp-protect-group.json"
$mainFile  = ".tmp-protect-main.json"

Set-Content -Path $groupFile -Value $groupPayload -Encoding UTF8
Set-Content -Path $mainFile  -Value $mainPayload  -Encoding UTF8

for ($i = 1; $i -le 22; $i++) {
  $num = "{0:d2}" -f $i
  $branch = "group-g$num"

  gh api `
    -X PUT `
    "/repos/$Owner/$Repo/branches/$branch/protection" `
    --input $groupFile `
    -H "Accept: application/vnd.github+json" | Out-Null

  Write-Host "Protected $branch"
}

gh api `
  -X PUT `
  "/repos/$Owner/$Repo/branches/main/protection" `
  --input $mainFile `
  -H "Accept: application/vnd.github+json" | Out-Null

Write-Host "Protected main"
