import React from "react";
import ReactDOM from "react-dom";

// Assignment 5:
// Conditionally Render with Legacy Root API or New Root API

let root = document.getElementById("root");

ReactDOM.render(<App />, root);

function App() {
	return <div>Hello React!</div>;
}
