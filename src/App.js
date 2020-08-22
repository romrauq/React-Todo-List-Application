import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import About from "./components/pages/About";

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
			<Router>
				<div className="App">
					<Header />
					<Route
						exact
						path="/"
						render={(props) => (
							<React.Fragment>
								<AddTodo addTodo={this.addTodo} />
								<Todos
									todos={this.state.todos}
									markComplete={this.markComplete}
									delTodo={this.delTodo}
								/>
							</React.Fragment>
						)}
					/>
					<Route path="/About" component={About}>
						<About />
					</Route>
				</div>
			</Router>
		);
	}
}

export default App;
