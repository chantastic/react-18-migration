import React from "react";
import ReactDOM from "react-dom";

// Assignment 2:
// Update ReactDOM.render to ReactDOM.createRoot(rootNode).render(component)

ReactDOM.render(<App />, document.getElementById("root"));

function App() {
  return <p>Hello, React!</p>;
}
