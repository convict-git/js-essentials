# Notes - Introduction

## Trivial stuff

- jsx : extension for js files for react framework
- core js is also referred as vanilla javascript
- ECMAScript, specification of how the js should be interpreted in the browser
- babel, npm, WebPack, gulp: for builds
- react, vue, angular: js frameworks
- NOTE: we have installed node in macos using homebrew which has installed the latest version of node. Use nvm to install the specific version of node.

## Script tag placement

- script tags should be ideally kept in head. But this can create issues if the renderering is prompted by the js fetching and execution.
  Eg. If the js executation tries to access an element which isn't rendered yet. So to solve this, we use either `defer` or `async` and keep the scripts in head.
  By default, browser tries to render the page line by line, and as soon as it encounters a script (or in fact any external file), it goes to fetch (or process) it and executes it. Till that time renderer has to wait.
  `async`: Does the html rendering and fetching the scripts parallely, and holds the rendering so as to execute the script.
  `defer`: Does html rendering and fetching scripts parallely, but defers the executation till the rendering finishes.
  Usage depends on case to case basis, but always prefered one of the above two unless you have a reason to block the rendering.

## import and export values between Modules

- modular code. A module is independent of other modules. Use module export and imports to access values between modules.
- Modules work in their own private namespace so when declared as module, values are private and not in the global scope unless explicitly exported.
- We can use compound declarations to define and export values at the same time. eg .`export const pi = 3.14;` or `export function hypot(x,y) { return Math.sqrt(x*x + y*y);}`
- import/export statements have to be inside a module only.
- We have to be careful about what we put in modules and what we put in main file.
