import React from "react";
import ReactDOM from "react-dom";

// if you don't want a wrapping div,
// you can still guarantee a dom node with a sibling

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
// use requestIdleTimeout if you want to just wait for low-priority idle time
// window.requestIdleCallback(
// 	() => console.log("Rendered: low-priority idle timeout"),
// 	1000
// );

// and use setTimeout if you just want to wait until after React yields the first time
// also useful if you need to support browsers other than Safari
// window.setTimeout(() => console.log("Rendered: low-priority idle timeout"), 0);

function App() {
	return <div>Hello, React!</div>;
}
