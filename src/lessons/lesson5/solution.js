import React from "react";
import ReactDOM from "react-dom";

// Assignment 5:
// Conditionally Render with Legacy Root API or New Root API

let root = document.getElementById("root");

// could be process.env or feature flag
const REACT_18 = false;

if (REACT_18) {
	ReactDOM.createRoot(root).render(<App />);
} else {
	ReactDOM.render(<App />, root);
}

function App() {
	return <p>Hello React!</p>;
}
