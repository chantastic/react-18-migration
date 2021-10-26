import React from "react";
import ReactDOM from "react-dom";

// Assignment 4:
// Retain callback, using createRoot

ReactDOM.render(<App />, document.getElementById("root"), () =>
  console.log("React rendered")
);

function App() {
  return <div>Hello, React!</div>;
}
