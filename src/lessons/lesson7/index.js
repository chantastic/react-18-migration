import React from "react";
import ReactDOM from "react-dom";

// lesson 7:
// Remove ReactDOM.unstable_batchedUpdates

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
		setTimeout(() => {
			ReactDOM.unstable_batchedUpdates(() => {
				updateCount((count) => count + 1);
				updateIsOdd((oddness) => !oddness);
			});
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
