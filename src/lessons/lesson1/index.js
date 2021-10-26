import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
import Lesson from "../v17-batching.js";
// import reportWebVitals from "./reportWebVitals";

// let root = ReactDOM.createRoot(document.getElementById("root"));
ReactDOM.render(
  <Lesson />,
  document.getElementById("root")
);

// let seconds = 0;

// let rerender = setInterval(() => {
//   seconds++;
//   // happens at commitDetachRef *and* commitAttachRef
//   root.render(<App callback={() => console.log({ seconds })} />);
// }, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// root.render(<Lesson />);
