import React from "react";
import ReactDOM from "react-dom";

// Assignment 4:
// Replace Legacy Root API's Callback Argument

let root = document.getElementById("root");

ReactDOM.createRoot(root).render(
	<App callback={(ref) => console.log(ref.tagName)} />
);
// window.setTimeout(() => console.log("React rendered"), 0);

function App({ callback }) {
	// React.useEffect(() => console.log("React rendered"), [])
	return <div ref={callback}>Hello, React!</div>;
}
