import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

class App extends Component {
	state = {
		todos: [
			{
				id: 1,
				title: "Learn React",
				completed: false,
			},
			{
				id: 2,
				title: "Learn MySQL",
				completed: false,
			},
			{
				id: 3,
				title: "Learn Javascript",
				completed: true,
			},
		],
	};
	render() {
		return <Todos todos={this.state.todos} />;
	}
}

export default App;
