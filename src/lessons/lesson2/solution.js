import React from "react";
import ReactDOM from "react-dom";

// Assignment 2:
// Update ReactDOM.render to ReactDOM.createRoot(rootNode).render(component)

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

function App() {
	return <p>Hello, React!</p>;
}
