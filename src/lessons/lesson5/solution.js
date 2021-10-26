import React from "react";
import ReactDOM from "react-dom";

const env = "staging";
const root = document.getElementById("root");

if (env === "staging") {
	ReactDOM.createRoot(root).render(<App />);
} else {
	ReactDOM.render(<App />, root);
}

function App() {
	return <div>Hello React!</div>;
}
