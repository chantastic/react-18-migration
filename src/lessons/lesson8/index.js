import React from "react";
import ReactDOM from "react-dom";

// lesson 8:
// Opt-out of Automatic Batching with ReactDOM.flushSync

const root = document.getElementById("root");

let REACT_18 = true;

if (REACT_18) {
	ReactDOM.createRoot(root).render(<App />);
} else {
	ReactDOM.render(<App />, root);
}

function App() {
	let [count, updateCount] = React.useState(1);
	let [isOdd, updateIsOdd] = React.useState(true);

	function handleClick() {
		setTimeout(() => {
			updateCount((count) => count + 1);
			updateIsOdd((oddness) => !oddness);
		}, 0);
	}

	console.count("re-rendered");

	return (
		<div>
			<button type="button" onClick={handleClick}>
				{count} {isOdd.toString()}
			</button>
		</div>
	);
}
