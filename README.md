# Lessons

## The gradual adoption strategy of React 18

https://reactjs.org/blog/2021/06/08/the-plan-for-react-18.html#a-gradual-adoption-strategy

## Update React dependencies using @next version tag

- `npm i react@next`
- `npm i react-dom@next`
- get new warning in console

> Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot

_Links_

- https://www.npmjs.com/package/react
- https://www.npmjs.com/package/react-dom

### Replace legacy root API (render) with new root API (createRoot)

- Update to the new `ReactDOM.createRoot` api from `ReactDOM.render`
- Simple mechanical operation
  - Insert `createRoot` between `ReactDOM` module and `render()` call
  - Move root element from `render` to `createRoot`
- Warning goes away, meaning that we're now using the React 18 render, not the v17 legacy mode

```jsx
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
```

**after**

```jsx
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- The benefit of this API is the ability to re-render to the root, without having to pass the root again.

```jsx
const container = document.getElementById("app");

// Create a root.
const root = ReactDOM.createRoot(container);

// Initial render: Render an element to the root.
root.render(<App tab="home" />);

// During an update, there's no need to pass the container again.
root.render(<App tab="profile" />);
```

https://github.com/reactwg/react-18/discussions/5

---

## Notes

TODO:

- lesson titles
- course descriptions
- https://howtoegghead.com/instructor/style-guide/thinking-in-lessons/

---

### Use both classic renderer and React 18 renderer

// TODO

### `createRoot` callback

https://github.com/reactwg/react-18/discussions/5

re-render to node

```jsx
let seconds = 0;

let rerender = setInterval(() => {
  seconds++;
  // note
  // happens at commitDetachRef *and* commitAttachRef via callback
  root.render(<App seconds={seconds} />);
}, 1000);
```

#### `hydrateRoot` (probably skip because we aren't covering server)

https://github.com/reactwg/react-18/discussions/5

### `createRoot` callback

https://github.com/reactwg/react-18/discussions/5

**before**

```jsx
import * as ReactDOM from "react-dom";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement, () => console.log("rendered"));
```

**after**

```jsx
import * as ReactDOM from "react-dom";

function App({ callback }) {
  // Callback will be called when the div is first created.
  return (
    <div ref={callback}>
      <h1>Hello World</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(<App callback={() => console.log("renderered")} />);
```

#### alternatives

- this will call the callback with the DOM element ref. demonstrate that
- you can also wrap the whole thing in a new div, if you don't want to modify app
  - can't use fragment because there is no ref
- could also just call the function if you don't care about getting a reference to the dom node

### Autamic batching

#### Understand how event handler batching works in v16 and v17

#### See Automatic batching in practice

#### Opt-out of automitic batching in React 18 with flushSync()

#### automatic batching with class components

#### opt-out of automitic batching in class components with flushSync()

#### Remove extranious `unstable_batchedUpdates` usage

//

### [outro] Concurrent "mode" is dead (what's next)

https://github.com/reactwg/react-18/discussions/64
