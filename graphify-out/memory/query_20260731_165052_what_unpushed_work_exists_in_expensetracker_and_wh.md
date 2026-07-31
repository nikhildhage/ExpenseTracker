---
type: "query"
date: "2026-07-31T16:50:52.798930+00:00"
question: "What unpushed work exists in ExpenseTracker and what is the PR state?"
contributor: "graphify"
source_nodes: ["CLAUDE.md", "**Set Up Environment Variables**"]
---

# Q: What unpushed work exists in ExpenseTracker and what is the PR state?

## Answer

Snapshot 2026-07-31. Local dev is 7 commits AHEAD of remote ExpenseTracker/dev (remote name is ExpenseTracker, not origin; default branch is dev, not main). Unpushed commits: d17b332 Prettier config, 0bd0603 orphan div fix in index.html, e5e6198 repo reformat, 8e7425b graph refresh, cd0b446 freshness stamp fix, 04fe45f neutralize bare deno fmt, ad66ff6 gitignore .env. Five stacked branches exist locally and are unpushed, each based on the one before: chore/gitignore-env, chore/prettier-config, fix/index-html-orphan-tags, style/prettier-reformat, chore/graphify-refresh. Stacked is the only workable topology because the commits are genuinely dependent: the reformat needs the Prettier config to exist, and the index.html orphan-tag fix must land before the reformat or Prettier cannot parse the file. PR bodies with review-agent verdicts are pre-written at ~/.claude/jobs/b499afae/tmp/PR-descriptions.md. On GitHub, PR 1 fix/mui-v6-sx-migration is OPEN and PR 2 chore/regenerate-graphify-graph is CLOSED; the five stacked PRs were never created because pushing is blocked. Also pending cleanup: src/.env holds a superseded read-only token that gh no longer uses.

## Source Nodes

- CLAUDE.md
- **Set Up Environment Variables**