# Graph Report - ExpenseTracker  (2026-07-28)

## Corpus Check
- 15 files · ~14,715 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 127 nodes · 141 edges · 30 communities (11 shown, 19 thin omitted)
- Extraction: 91% EXTRACTED · 9% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.81)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `8e7425b0`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Details & Categories|Details & Categories]]
- [[_COMMUNITY_Form & Main Logic|Form & Main Logic]]
- [[_COMMUNITY_Chart Data Pipeline|Chart Data Pipeline]]
- [[_COMMUNITY_App Entry & Dashboard|App Entry & Dashboard]]
- [[_COMMUNITY_FormMain Components|Form/Main Components]]
- [[_COMMUNITY_App Bootstrap & Theme|App Bootstrap & Theme]]
- [[_COMMUNITY_Vendor Splitting Rationale|Vendor Splitting Rationale]]
- [[_COMMUNITY_Workspace Config|Workspace Config]]
- [[_COMMUNITY_Vite Env Types|Vite Env Types]]
- [[_COMMUNITY_Vite Logo Asset|Vite Logo Asset]]
- [[_COMMUNITY_Color Palette|Color Palette]]
- [[_COMMUNITY_Diamond Shapes|Diamond Shapes]]
- [[_COMMUNITY_White Center Element|White Center Element]]
- [[_COMMUNITY_App Screenshot|App Screenshot]]
- [[_COMMUNITY_Income Card UI|Income Card UI]]
- [[_COMMUNITY_Form Card UI|Form Card UI]]
- [[_COMMUNITY_Expense Card UI|Expense Card UI]]
- [[_COMMUNITY_Total Balance UI|Total Balance UI]]
- [[_COMMUNITY_Categories Legend|Categories Legend]]
- [[_COMMUNITY_Form Fields UI|Form Fields UI]]
- [[_COMMUNITY_Create Button|Create Button]]
- [[_COMMUNITY_Voice Hint UI|Voice Hint UI]]
- [[_COMMUNITY_Three-Panel Layout|Three-Panel Layout]]
- [[_COMMUNITY_React Logo|React Logo]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]

## God Nodes (most connected - your core abstractions)
1. `<a name="quick-start">🤸 Quick Start</a>` - 9 edges
2. `Details Component` - 9 edges
3. `Main Component` - 5 edges
4. `Form Component` - 5 edges
5. `incomeColors` - 4 edges
6. `expenseColors` - 4 edges
7. `incomeCategoryLabels` - 4 edges
8. `expenseCategoryLabels` - 4 edges
9. `DashBoard Component` - 4 edges
10. `Main useStyles Hook` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Main Component` --conceptually_related_to--> `Voice Activated Finance Feature`  [INFERRED]
  src/Components/Main/Main.tsx → ReadMe.md
- `Vite Client Type Reference` --conceptually_related_to--> `pnpm Workspace Configuration`  [INFERRED]
  src/vite-env.d.ts → pnpm-workspace.yaml
- `index.html Root Mount` --references--> `ReactDOM Root Render`  [EXTRACTED]
  index.html → src/main.tsx
- `Project graphify Rules` --conceptually_related_to--> `ExpenseTracker README`  [INFERRED]
  CLAUDE.md → ReadMe.md
- `App useStyles Hook` --semantically_similar_to--> `Main useStyles Hook`  [INFERRED] [semantically similar]
  src/appStyles.ts → src/Components/Main/mainStyles.ts

## Hyperedges (group relationships)
- **DashBoard 3-Panel Income/Form/Expense Layout** — dashboard_dashboard, details_details, main_main, form_form [EXTRACTED 1.00]
- **App Bootstrap Chain (HTML to Render)** — index_html_root, main_root_render, app_app, dashboard_dashboard [EXTRACTED 1.00]
- **Income/Expense Category Data Flow** — categories_incomecolors, categories_incomecategorylabels, categories_incomecategories, details_details [EXTRACTED 1.00]

## Communities (30 total, 19 thin omitted)

### Community 0 - "Details & Categories"
Cohesion: 0.21
Nodes (14): expenseCategories, expenseCategoryLabels, expenseColors, incomeCategories, incomeCategoryLabels, incomeColors, resetCategories(), Card (+6 more)

### Community 1 - "Form & Main Logic"
Cohesion: 0.12
Nodes (19): App Component, App useStyles Hook, Project graphify Rules, DashBoard Component, DashBoardProps Type, Details useStyles Hook, Form Component, Form getFormData (+11 more)

### Community 2 - "Chart Data Pipeline"
Cohesion: 0.14
Nodes (14): <a name="quick-start">🤸 Quick Start</a>, **Build**, **Cloning the Repository**, code:bash (git clone https://github.com/nikhildhage/ExpenseTracker.git), code:bash (deno install), code:bash (deno task build), code:env (#MONGODB), code:bash (deno task dev) (+6 more)

### Community 3 - "App Entry & Dashboard"
Cohesion: 0.21
Nodes (5): App(), DashBoard(), DashBoardProps, root, theme

### Community 4 - "Form/Main Components"
Cohesion: 0.21
Nodes (4): Form(), FormProps, Main(), MainProps

### Community 5 - "App Bootstrap & Theme"
Cohesion: 0.26
Nodes (12): expenseCategories (typed), expenseCategoryLabels, expenseColors palette, incomeCategories (typed), incomeCategoryLabels, incomeColors palette, resetCategories Function, Doughnut Chart Data Builder (+4 more)

### Community 6 - "Vendor Splitting Rationale"
Cohesion: 0.25
Nodes (7): <a name="features">🔋 Features</a>, <a name="introduction">🤖 Introduction</a>, <a name="links">🔗 Links</a>, 📋 <a name="table">Table of Contents</a>, <a name="tech-stack">⚙️ Tech Stack</a>, <a name="visit">🤖 Visit</a>, code:block6 (./src/assets folder)

### Community 8 - "Workspace Config"
Cohesion: 0.67
Nodes (3): Vendor Chunk Splitting for Caching, Vite Build Config (manualChunks), manualChunks Vendor Splitter

## Knowledge Gaps
- **46 isolated node(s):** `graphify`, `📋 <a name="table">Table of Contents</a>`, `<a name="introduction">🤖 Introduction</a>`, `<a name="visit">🤖 Visit</a>`, `<a name="tech-stack">⚙️ Tech Stack</a>` (+41 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **19 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `DashBoard Component` connect `Form & Main Logic` to `App Bootstrap & Theme`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **Why does `<a name="quick-start">🤸 Quick Start</a>` connect `Chart Data Pipeline` to `Vendor Splitting Rationale`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **What connects `graphify`, `📋 <a name="table">Table of Contents</a>`, `<a name="introduction">🤖 Introduction</a>` to the rest of the system?**
  _46 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Form & Main Logic` be split into smaller, more focused modules?**
  _Cohesion score 0.12 - nodes in this community are weakly interconnected._
- **Should `Chart Data Pipeline` be split into smaller, more focused modules?**
  _Cohesion score 0.14 - nodes in this community are weakly interconnected._