import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
	getStyle = () => {
		return {
			textDecoration: this.props.todo.completed ? "line-through" : "none",
			fontSize: "2rem",
			width: "250px",
			padding: "5px",
			marginBottom: "10px",
			backgroundColor: "wheat",
			borderRadius: "5px",
		};
	};

	render() {
		const { id, title } = this.props.todo;

		return (
			<div style={this.getStyle()}>
				<p>
					<input
						type="checkbox"
						onChange={this.props.markComplete.bind(this, id)}
					/>{" "}
					{title}
					<button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>
						&times;
					</button>
				</p>
			</div>
		);
	}
}

// Setting TodoItems' PropType:
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
};

const btnStyle = {
	color: "white",
	padding: "5px 9px",
	backgroundColor: "#ff0000",
	border: "none",
	borderRadius: "50%",
	cursor: "pointer",
	float: "right",
};

export default TodoItem;
