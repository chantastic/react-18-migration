import React from "react";
import ReactDOM from "react-dom";

// lesson 6:
// opt-in to automatic batching in React 18 with createRoot
// - add a setTimeout to the state update calls
// - note how the re-render count goes up

const root = document.getElementById("root");

if (false /* render with new root API */) {
	ReactDOM.createRoot(root).render(<App />);
} else {
	ReactDOM.render(<App />, root);
}

function App() {
	let [count, updateCount] = React.useState(1);
	let [isOdd, updateIsOdd] = React.useState(true);

	function handleClick() {
		updateCount((count) => count + 1);
		updateIsOdd((oddness) => !oddness);
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
