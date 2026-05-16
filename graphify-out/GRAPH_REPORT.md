# Graph Report - .  (2026-05-08)

## Corpus Check
- Corpus is ~14,617 words - fits in a single context window. You may not need a graph.

## Summary
- 90 nodes · 81 edges · 27 communities (8 shown, 19 thin omitted)
- Extraction: 85% EXTRACTED · 15% INFERRED · 0% AMBIGUOUS · INFERRED: 12 edges (avg confidence: 0.81)
- Token cost: 15,124 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Details & Categories|Details & Categories]]
- [[_COMMUNITY_Form & Main Logic|Form & Main Logic]]
- [[_COMMUNITY_Chart Data Pipeline|Chart Data Pipeline]]
- [[_COMMUNITY_App Entry & Dashboard|App Entry & Dashboard]]
- [[_COMMUNITY_FormMain Components|Form/Main Components]]
- [[_COMMUNITY_App Bootstrap & Theme|App Bootstrap & Theme]]
- [[_COMMUNITY_Vendor Splitting Rationale|Vendor Splitting Rationale]]
- [[_COMMUNITY_Workspace Config|Workspace Config]]
- [[_COMMUNITY_Vite Logo Asset|Vite Logo Asset]]
- [[_COMMUNITY_App Background Image|App Background Image]]
- [[_COMMUNITY_Geometric Design|Geometric Design]]
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

## God Nodes (most connected - your core abstractions)
1. `Details Component` - 9 edges
2. `Main Component` - 5 edges
3. `Form Component` - 5 edges
4. `DashBoard Component` - 4 edges
5. `Main useStyles Hook` - 4 edges
6. `incomeCategories (typed)` - 4 edges
7. `expenseCategories (typed)` - 4 edges
8. `App Component` - 3 edges
9. `ReactDOM Root Render` - 3 edges
10. `Doughnut Chart Data Builder` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Main Component` --conceptually_related_to--> `Voice Activated Finance Feature`  [INFERRED]
  src/Components/Main/Main.tsx → ReadMe.md
- `Vite Client Type Reference` --conceptually_related_to--> `pnpm Workspace Configuration`  [INFERRED]
  src/vite-env.d.ts → pnpm-workspace.yaml
- `index.html Root Mount` --references--> `ReactDOM Root Render`  [EXTRACTED]
  index.html → src/main.tsx
- `App useStyles Hook` --semantically_similar_to--> `Main useStyles Hook`  [INFERRED] [semantically similar]
  src/appStyles.ts → src/Components/Main/mainStyles.ts
- `Project graphify Rules` --conceptually_related_to--> `ExpenseTracker README`  [INFERRED]
  CLAUDE.md → ReadMe.md

## Hyperedges (group relationships)
- **DashBoard 3-Panel Income/Form/Expense Layout** — dashboard_dashboard, details_details, main_main, form_form [EXTRACTED 1.00]
- **App Bootstrap Chain (HTML to Render)** — index_html_root, main_root_render, app_app, dashboard_dashboard [EXTRACTED 1.00]
- **Income/Expense Category Data Flow** — categories_incomecolors, categories_incomecategorylabels, categories_incomecategories, details_details [EXTRACTED 1.00]

## Communities (27 total, 19 thin omitted)

### Community 0 - "Details & Categories"
Cohesion: 0.15
Nodes (12): expenseCategories, expenseCategoryLabels, expenseColors, incomeCategories, incomeCategoryLabels, incomeColors, Card, CardContent (+4 more)

### Community 1 - "Form & Main Logic"
Cohesion: 0.18
Nodes (12): Project graphify Rules, Details useStyles Hook, Form Component, Form getFormData, Form handleSubmit, Form useStyles Hook, Main Component, MainProps Type (+4 more)

### Community 2 - "Chart Data Pipeline"
Cohesion: 0.26
Nodes (12): expenseCategories (typed), expenseCategoryLabels, expenseColors palette, incomeCategories (typed), incomeCategoryLabels, incomeColors palette, resetCategories Function, Doughnut Chart Data Builder (+4 more)

### Community 3 - "App Entry & Dashboard"
Cohesion: 0.22
Nodes (3): DashBoardProps, root, theme

### Community 5 - "App Bootstrap & Theme"
Cohesion: 0.29
Nodes (7): App Component, App useStyles Hook, DashBoard Component, DashBoardProps Type, index.html Root Mount, ReactDOM Root Render, MUI Theme (light, primary blueGrey)

### Community 6 - "Vendor Splitting Rationale"
Cohesion: 0.67
Nodes (3): Vendor Chunk Splitting for Caching, Vite Build Config (manualChunks), manualChunks Vendor Splitter

## Knowledge Gaps
- **44 isolated node(s):** `DashBoardProps`, `root`, `theme`, `Card`, `CardHeader` (+39 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **19 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `DashBoard Component` connect `App Bootstrap & Theme` to `Form & Main Logic`, `Chart Data Pipeline`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._
- **Why does `Main Component` connect `Form & Main Logic` to `App Bootstrap & Theme`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **Why does `Details Component` connect `Chart Data Pipeline` to `Form & Main Logic`, `App Bootstrap & Theme`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `Main useStyles Hook` (e.g. with `App useStyles Hook` and `Details useStyles Hook`) actually correct?**
  _`Main useStyles Hook` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `DashBoardProps`, `root`, `theme` to the rest of the system?**
  _44 weakly-connected nodes found - possible documentation gaps or missing edges._