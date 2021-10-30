import React from "react";
import ReactDOM from "react-dom";

// lesson 9:
// Class edge-case

const root = document.getElementById("root");

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 1, isOdd: true };
	}

	handleClick = () => {
		setTimeout(() => {
			ReactDOM.flushSync(() => {
				this.setState(({ count }) => ({ count: count + 1 }));
			});

			// logs partial state change
			console.log(this.state);

			this.setState(({ isOdd }) => ({ isOdd: !isOdd }));

			// logs same partial state change
			console.log(this.state);
		});
	};

	render() {
		let { count, isOdd } = this.state;

		return (
			<div>
				<button type="button" onClick={this.handleClick}>
					{count} {isOdd.toString()}
				</button>
			</div>
		);
	}
}

if (true /* render with new root API */) {
	ReactDOM.createRoot(root).render(<App />);
} else {
	ReactDOM.render(<App />, root);
}
