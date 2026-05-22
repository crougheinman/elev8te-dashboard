# Copilot Instructions for elev8te

- This project is a standalone static SPA in `elev8te/` using only `index.html`, `index.css`, and `index.js`.
- There is no Node build or package tooling in this folder; the app runs directly from the browser with `index.html`.
- `index.js` is the only JavaScript source file and contains the full app logic, state, and rendering.

## Architecture

- `index.html` defines the page shell and placeholder sections for pages.
- `index.css` contains all styling.
- `index.js` manages app state, page rendering, event wiring, and persistence.
- State is persisted in `localStorage` under `STORAGE_KEY = 'elevateClientOS_v7'`.
- The app is rendered via `renderSidebar()`, `renderAll()`, and page-specific render functions like `renderDashboard()`, `renderClientsPage()`, `renderMetaPage()`, `renderFeedback()`, and `renderSops()`.

## Data and flow

- Most actions mutate the global `state` object and then call `saveState()` followed by `renderAll()` or a page render.
- `loadState()` hydrates state from `localStorage`; if no state exists, it initializes from hardcoded defaults like `DEFAULT_CLIENTS` and `DEFAULT_SOPS`.
- The app is effectively a manual DOM-render SPA with templated HTML strings and event attachment after render.

## Important patterns

- Avoid assuming a framework; this code is plain ES202x browser JS.
- `Chart.js` is loaded from CDN in `index.html`; chart creation is handled in `index.js` via `new Chart(...)`.
- Hidden file inputs are used for customer logo/image uploads and PDF upload flows.
- There is a custom date picker in `index.js` driven by `openDatePicker()`, `renderDpMonth()`, and `onDayClick()`.
- Page navigation is managed via `currentPage`, `state.navOrder`, and `renderSidebar()`.

## When editing

- Keep changes localized to the page renderer or state function being modified.
- Preserve the existing `saveState()` / `loadState()` semantics. This app is intentionally plain browser-only and does not use backend sync.
- Use the existing data model shape where possible; the app expects fields like `nextDropDate`, `feeOnRevenue`, `customBreakEvenRoas`, `agreementPdf`, `weeklyData`, and `assets`.

## Debugging

- Open `index.html` in a browser and use DevTools to inspect `state` in the console.
- Search `index.js` for `renderAll()` to see update points and for `saveState()` to see persistence hooks.
- The app does not use modules, so keep file-local refactors simple.
