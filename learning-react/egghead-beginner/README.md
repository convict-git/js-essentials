## Basics

- [Adding JSX in your project using npm](https://reactjs.org/docs/add-react-to-a-website.html#add-jsx-to-a-project)

- [Memory Leaks](https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/)

- `{ ... }` inside has to be some js expression that evaluates to something. Therefore, **NO** `for, if, else ...` loops inside.

- Argument sent in the constructor is a single entity (object) in `{arg1, arg2, ...argRest}`, hence they are keys of the object

- Native events vs Synthetic events

- [Think before using arrow functions for event listeners](https://stackoverflow.com/questions/50350202/when-to-use-inline-function-on-button-onclick-event-javascript-react-js)

## Hooks

- [React DOCS](https://reactjs.org/docs/hooks-intro.html)
- [Stateful logic and state](https://stackoverflow.com/questions/55133275/whats-the-difference-between-stateful-logic-and-state-in-react)

### MORE

- Rerendering -> event listeners and memory leaks ?

- read more about how `useState()` and `useEffect()` works. `useEffect()` is called everytime the component is rerendered.

- `useState()` can accept the initial value as well as an function that returns the initial value. Doing the latter makes it a lazy evaluation and thus saves lot of time (think of fetching or parsing a JSON for initital value).

- :white_check_mark: [Return value of useEffect and handling race conditions when async fetch may try to put something in the DOM, but the DOM doesn't exist](https://stackoverflow.com/questions/56800694/what-is-the-expected-return-of-useeffect-used-for)

- [Avoid race conditions](https://medium.com/hackernoon/avoiding-race-conditions-when-fetching-data-with-react-hooks-220d6fd0f663)

- [Hook flow](https://github.com/donavon/hook-flow)

- Don't do query selectors in class components. It breaks the encapsulation.

- [useEffect() explained](https://blog.logrocket.com/guide-to-react-useeffect-hook/)

# React DOCS

##
