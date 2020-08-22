import React, { Component } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";

class App extends Component {
	state = {
		todos: [
			{
				id: Math.random(),
				title: "Learn Javascript",
				completed: false,
			},
			{
				id: Math.random(),
				title: "Learn React",
				completed: false,
			},
			{
				id: Math.random(),
				title: "Learn MySQL",
				completed: false,
			},
		],
	};

	// Toggle "state.todo.complete" boolean value:
	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
		});
	};

	//Delete todo item:
	delTodo = (id) => {
		this.setState({
			todos: [...this.state.todos.filter((todo) => todo.id !== id)],
		});
	};

	// Add Todo:
	addTodo = (title) => {
		const newTodo = {
			id: this.state.todos.length * Math.random(),
			title,
			completed: false,
		};
		this.setState({ todos: [...this.state.todos, newTodo] });
	};

	render() {
		return (
			<div className="App">
				<Header />
				<AddTodo addTodo={this.addTodo} />
				<Todos
					todos={this.state.todos}
					markComplete={this.markComplete}
					delTodo={this.delTodo}
				/>
			</div>
		);
	}
}

export default App;
