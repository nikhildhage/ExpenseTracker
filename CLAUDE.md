## graphify

This project uses a knowledge graph at graphify-out/ with god nodes, community
structure, and cross-file relationships.

graphify-out/ is git-ignored and NOT committed to the repo, so a fresh clone
will not have it. Everything below is conditional on what is actually on disk —
check first, do not assume.

Rules:

- FIRST, check whether graphify-out/ exists and whether it contains
  GRAPH_REPORT.md.
- IF BOTH the graphify-out/ directory AND graphify-out/GRAPH_REPORT.md exist:
  read that existing GRAPH_REPORT.md and use it as-is. Do NOT regenerate,
  rebuild, or refresh the graph on your own initiative. A new version is
  produced only when the user runs `graphify update .` or regenerates the
  graphify files themselves, or when they accept the offer described below.
- IF BOTH the graphify-out/ directory AND graphify-out/GRAPH_REPORT.md exist:
  after editing code, and/or when committing or pushing changes to the local
  or remote repo, OFFER to bring the graph up to date by running
  `graphify update .` (AST-only, no API cost). Ask and wait for the user to
  agree — never run it unprompted. If they decline, proceed without it.
- ONLY IF graphify-out/ does not exist, OR it exists but has no
  GRAPH_REPORT.md: the graph needs to be generated. Tell the user it is missing
  and offer to run graphify — but let them generate it manually with `graphify`
  if they prefer. Do not silently generate it.
- WHEN the report exists (per the check above), read
  graphify-out/GRAPH_REPORT.md before reading any source files, running
  grep/glob searches, or answering codebase questions. It is your primary map
  of the codebase. When it does not exist, fall back to reading files and
  searching directly — the missing graph is not a reason to stop or to
  generate one unasked.
- IF graphify-out/wiki/index.md EXISTS, navigate it instead of reading raw files
- For cross-module "how does X relate to Y" questions, prefer
  `graphify query "<question>"`, `graphify path "<A>" "<B>"`, or
  `graphify explain "<concept>"` over grep — these traverse the graph's
  EXTRACTED + INFERRED edges instead of scanning files
