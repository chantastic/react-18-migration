import React from "react";
import ReactDOM from "react-dom";

// if you don't want a wrapping div,
// you can still guarantee a dom node with a sibling

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<App />
		<div ref={(ref) => console.log(`React rendered at ${ref.tagName}`)} />
	</>
);

function App() {
	return <div>Hello, React!</div>;
}
