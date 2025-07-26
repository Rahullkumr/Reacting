# Notes : 1 July 2025

Let's start revising React.

## Today's learnings

- What is React?

  - React is a JS library which is used to create SPAs.

- library vs framework

  - library is a collection of reusable blocks of code (functions, classes, components)
  - framework is a collection of libraries.

- Single Page Applications (SPA)

  - Applications which have only one html file and where a webpage does not refresh when the content updates/modifies.

- AJAX

  - The main technology behind SPAs which helps to load the content without a full page reload.
  - AJAX will send only the necessary request to the server, so that bandwidth will be very very less

- Package Bundler

  - Vite+React project Uses `esbuild` for development (ultra-fast) and `Rollup` for production builds
  - In Development – to provide features like:
    - Hot Module Replacement (HMR)
    - Fast refresh
    - JSX/TypeScript/Babel transpilation
    - Live reloading
    - Module resolution
  - In Production – to:
    - Minify and optimize code
    - Tree-shake unused code
    - Bundle all dependencies into fewer/smaller files
    - Improve performance and loading time

- npm+vite vs pnpm+vite

  - pnpm is generally `2-3x faster` than npm for installations and uses `50-70% less disk space` due to its global store and hard-linking system

- Installation of First React project

  ```js
  pnpm create vite

  // and proceed further
  ```

- **Hello World!** in React
