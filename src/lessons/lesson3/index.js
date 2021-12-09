import React from "react";
import ReactDOM from "react-dom";

// Assignment 3:
// Use Legacy Root API and New createRoot API at the same time
// render React Legacy root at root-2

let root1 = document.getElementById("root");
let root2 = document.getElementById("root-2");

let react18Root = ReactDOM.createRoot(root1);

react18Root.render(<App root="New Root API" />);

function App({ root }) {
	return <p>Hello, React {root}!</p>;
}
