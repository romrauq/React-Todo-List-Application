import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

class App extends Component {
	state = {
		todos: [
			{
				id: 1,
				title: "Learn Javascript",
				completed: false,
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

	// Function to toggle "state.todo.complete" objects' boolean value:
	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id == id) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
		});
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
