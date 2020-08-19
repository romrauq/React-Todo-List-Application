import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

class App extends Component {
	state = {
		todos: [
			{
				id: 1,
				title: "Learn Javascript",
				completed: true,
			},
			{
				id: 2,
				title: "Learn React",
				completed: false,
			},
			{
				id: 3,
				title: "Learn MySQL",
				completed: false,
			},
		],
	};

	markComplete = (e) => {
		console.log("Linked method success");
	};

	render() {
		return (
			<div className="main-component">
				<Todos todos={this.state.todos} markComplete={this.markComplete} />
			</div>
		);
	}
}

export default App;
