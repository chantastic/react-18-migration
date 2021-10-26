import React from "react";
import ReactDOM from "react-dom";

//Use the ref callback if you want to wait until the root component commits

ReactDOM.createRoot(document.getElementById("root")).render(
	<App callback={(ref) => console.log(`React rendered at ${ref.tagName}`)} />
);

function App({ callback }) {
	return <div ref={callback}>Hello, React!</div>;
}
