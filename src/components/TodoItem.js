import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
	getStyle = () => {
		return {
			textDecoration: this.props.todo.completed ? "line-through" : "none",
			fontSize: "2rem",
			padding: "5px",
			marginBottom: "10px",
			backgroundColor: "wheat",
			borderRadius: "5px",
		};
	};

	render() {
		return (
			<div style={this.getStyle()}>
				<p>{this.props.todo.title}</p>
			</div>
		);
	}
}

// Setting TodoItems' PropType:
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
};

export default TodoItem;
