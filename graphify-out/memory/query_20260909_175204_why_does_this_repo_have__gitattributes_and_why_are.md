---
type: "query"
date: "2026-09-09T17:52:04.021476+00:00"
question: "Why does this repo have .gitattributes and why are graphify cache and graph.html untracked?"
contributor: "graphify"
source_nodes: ["CLAUDE.md", "Project graphify Rules"]
---

# Q: Why does this repo have .gitattributes and why are graphify cache and graph.html untracked?

## Answer

Both come from the 2026-09-09 session and exist to stop phantom diffs. (1) .gitattributes pins '* text=auto eol=lf' because Windows git sets core.autocrlf=true while WSL git had no such setting, so the same worktree showed 7 modified files and roughly 5100 changed lines in WSL versus 1 in VS Code, all of it line endings only. core.autocrlf is also set to false in local config so both gits agree on what is modified. Commit f6e4e53. (2) .gitignore now excludes graphify-out/cache/ (53 derived AST and semantic files) and graphify-out/graph.html because 'graphify update .' regenerates them every session; graph.json alone accounted for 5782 changed lines in a single refresh. .claude/settings.local.json is also ignored because it is machine-local permission state that mutates whenever a permission is granted, and the existing '*.local' pattern never matched it. Files stay on disk, only tracking stopped. Commit 7b1fc51, 56 files and 3049 deletions. Note that graphify-out/GRAPH_REPORT.md, graph.json and manifest.json remain TRACKED, so they still show as modified after every update.

## Source Nodes

- CLAUDE.md
- Project graphify Rules