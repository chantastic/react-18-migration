import React from "react";
import ReactDOM from "react-dom";

// this solution allows you to not change the app
// you might have to modify a LOT of components to take this prop

ReactDOM.createRoot(document.getElementById("root")).render(
	<div ref={(ref) => console.log(`React rendered at ${ref.tagName}`)}>
		<App />
	</div>
);

function App() {
	return <div>Hello, React!</div>;
}
