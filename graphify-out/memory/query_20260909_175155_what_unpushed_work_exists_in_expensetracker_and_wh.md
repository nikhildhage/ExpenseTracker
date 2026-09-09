---
type: "query"
date: "2026-09-09T17:51:55.097807+00:00"
question: "What unpushed work exists in ExpenseTracker and what is the PR and branch state?"
contributor: "graphify"
source_nodes: ["CLAUDE.md", "Project graphify Rules"]
---

# Q: What unpushed work exists in ExpenseTracker and what is the PR and branch state?

## Answer

Snapshot 2026-09-09, superseding the 2026-07-31 note. The five stacked branches (chore/gitignore-env, chore/prettier-config, fix/index-html-orphan-tags, style/prettier-reformat, chore/graphify-refresh) NO LONGER EXIST locally and the stacked-PR plan was abandoned. The reflog shows their commits were cherry-picked directly onto dev instead. Evidence: remote chore/graphify-refresh still holds the originals f23690e 031e2f0 d04a7bf 44256de d0bd497 7e08523 d67ea74, while dev carries same-message different-sha copies d17b332 0bd0603 e5e6198 8e7425b cd0b446 04fe45f ad66ff6. That remote branch is now 7 orphaned duplicate commits already landed on dev and is safe to delete. Branch state: dev is synced with remote at 7b1fc51; main is 53 commits behind dev and fully contained in it, so no divergence, just stale. PR 1 fix/mui-v6-sx-migration is still OPEN since 2026-07-24 and its single commit 12e6eb8 is not on dev, making it the only genuinely unmerged work. PR 2 chore/regenerate-graphify-graph is CLOSED. Uncommitted: deno.json is staged but not committed, removing the fmt.exclude block that commit 04fe45f added to stop bare 'deno fmt' from fighting Prettier.

## Source Nodes

- CLAUDE.md
- Project graphify Rules