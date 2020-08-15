import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
	state = {};
	render() {
		return (
			<div>
				<h2>{this.props.todo.title}</h2>
			</div>
		);
	}
}

// Setting TodoItems' PropTypes:
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
};

export default TodoItem;
