import React from "react";
import ReactDOM from "react-dom";

// lesson 9:
// Handle Class Component setState edge-case with ReactDOM.flushSync

const root = document.getElementById("root");

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 0, isOdd: false };
	}

	handleClick() {
		setTimeout(() => {
			this.setState(({ count }) => ({ count: count + 1 }));

			// logs partial state changes even tho it shouldn't
			console.log(this.state);

			this.setState(({ isOdd }) => ({ isOdd: !isOdd }));

			console.log(this.state);
		});
	}

	render() {
		return (
			<div>
				<button type="button" onClick={this.handleClick.bind(this)}>
					{this.state.count} {this.state.isOdd.toString()}
				</button>
			</div>
		);
	}
}

if (false /* render with new root API */) {
	ReactDOM.createRoot(root).render(<App />);
} else {
	ReactDOM.render(<App />, root);
}
