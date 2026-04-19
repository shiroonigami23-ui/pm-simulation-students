# Apply Branch Protection (run by admin)
# Requires: gh auth login with repo admin scope

param(
  [string]$Owner = "shiroonigami23-ui",
  [string]$Repo = "pm-simulation-students"
)

for ($i=1; $i -le 22; $i++) {
  $num = "{0:d2}" -f $i
  $branch = "group-g$num"

  gh api `
    -X PUT `
    "/repos/$Owner/$Repo/branches/$branch/protection" `
    -H "Accept: application/vnd.github+json" `
    -f required_status_checks[strict]=true `
    -f enforce_admins=true `
    -F required_pull_request_reviews='{}' `
    -F restrictions='null' `
    -F required_linear_history='true' `
    -F allow_force_pushes='false' `
    -F allow_deletions='false'

  Write-Host "Protected $branch"
}

gh api `
  -X PUT `
  "/repos/$Owner/$Repo/branches/main/protection" `
  -H "Accept: application/vnd.github+json" `
  -f required_status_checks[strict]=true `
  -f enforce_admins=true `
  -F required_pull_request_reviews[dismiss_stale_reviews]=true `
  -F required_pull_request_reviews[required_approving_review_count]=1 `
  -F restrictions='null' `
  -F required_linear_history='true' `
  -F allow_force_pushes='false' `
  -F allow_deletions='false'
