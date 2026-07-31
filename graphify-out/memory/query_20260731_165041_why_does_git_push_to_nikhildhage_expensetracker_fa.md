---
type: "query"
date: "2026-07-31T16:50:41.499235+00:00"
question: "Why does git push to nikhildhage/ExpenseTracker fail with 403, and is it fixed?"
contributor: "graphify"
source_nodes: ["CLAUDE.md", "Project graphify Rules"]
---

# Q: Why does git push to nikhildhage/ExpenseTracker fail with 403, and is it fixed?

## Answer

Verified 2026-07-31. TWO stacked causes. Cause 1 (credential helper) is SOLVED: repo-local .git/config sets credential.helper to Windows Git Credential Manager, which overrides the global gh helper; the fix is a per-command override, git -c credential.helper= -c credential.helper=!/home/nikhil/.local/bin/gh auth git-credential push. GIT_TRACE=1 confirms gh auth git-credential get is now invoked. Do NOT rewrite .git/config, because the repo lives on /mnt/c and Windows git cannot execute the WSL gh binary. Cause 2 (token grants) is NOT solved: the fine-grained PAT lacks contents=write. A newer token replaced the one in src/.env but has the same read-only grant. Probe: gh api -i -X POST repos/nikhildhage/ExpenseTracker/git/refs with an all-zero sha returns 403 plus X-Accepted-Github-Permissions: contents=write, and creates nothing because the permission check precedes payload validation. Note that gh api repos/OWNER/REPO reporting push=true is a red herring: it reflects the user repo role, not the token grants. Fix requires granting Contents: Read and write in the GitHub UI.

## Source Nodes

- CLAUDE.md
- Project graphify Rules