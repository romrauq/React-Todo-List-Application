import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
	// state = {};
	render() {
		return this.props.todos.map((todo) => (
			<TodoItem key={todo.id} todo={todo} />
		));
	}
}

// Setting Todos' PropTypes:
Todos.propTypes = {
	todos: PropTypes.array.isRequired,
};

export default Todos;
