import React from "react";
import ReactDOM from "react-dom";

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
			// the function is a noop in React 18
			// but should be removed now for compatability with future versions
			// ReactDOM.unstable_batchedUpdates(() => {
			updateCount((count) => count + 1);
			updateIsOdd((oddness) => !oddness);
			// });
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
