import React from "react";
import ReactDOM from "react-dom";

// lesson 9:
// Handle Class Component setState edge-case with ReactDOM.flushSync

const root = document.getElementById("root");

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { count: 1, isOdd: false };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		setTimeout(() => {
			ReactDOM.flushSync(() => {
				this.setState(({ count }) => ({ count: count + 1 }));
			});
			console.log(this.state);

			ReactDOM.flushSync(() => {
				this.setState(({ isOdd }) => ({ isOdd: !isOdd }));
			});
			console.log(this.state);
		});
	}

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

let REACT_18 = true;

if (REACT_18) {
	ReactDOM.createRoot(root).render(<App />);
} else {
	ReactDOM.render(<App />, root);
}
