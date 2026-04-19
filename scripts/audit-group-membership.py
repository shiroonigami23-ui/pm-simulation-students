import json
import subprocess
from collections import defaultdict

ORG = "ShiroOni23"
GROUP_SLUGS = [f"group-g{i:02d}" for i in range(1, 23)]

def gh_json(path):
    out = subprocess.run(["gh", "api", path], check=True, capture_output=True, text=True).stdout
    return json.loads(out)

memberships = defaultdict(list)

for slug in GROUP_SLUGS:
    team = gh_json(f"/orgs/{ORG}/teams/{slug}/members")
    for u in team:
        memberships[u["login"]].append(slug)

print("== Users in multiple group teams ==")
found = False
for user, teams in sorted(memberships.items()):
    if len(teams) > 1:
        found = True
        print(f"{user}: {', '.join(teams)}")
if not found:
    print("None")

print("\n== Users in exactly one group team ==")
for user, teams in sorted(memberships.items()):
    if len(teams) == 1:
        print(f"{user}: {teams[0]}")
