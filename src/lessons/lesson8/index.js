import React from "react";
import ReactDOM from "react-dom";

// lesson 8:
// Opt-out of automatic batching with ReactDOM.flushSync

const root = document.getElementById("root");

if (true /* render with new root API */) {
	ReactDOM.createRoot(root).render(<App />);
} else {
	ReactDOM.render(<App />, root);
}

function App() {
	let [count, updateCount] = React.useState(1);
	let [isOdd, updateIsOdd] = React.useState(true);

	function handleClick() {
		setTimeout(() => {
			// these are batched, even if we don't want that
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
