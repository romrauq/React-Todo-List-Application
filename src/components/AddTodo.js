import React, { Component } from "react";

class AddTodo extends Component {
	state = {};
	render() {
		return (
			<form action="">
				<div
					style={{
						display: "flex",
						flexDirection: "spaced-between",
						marginBottom: "5px",
					}}
				>
					<input
						type="text"
						name="title"
						placeholder="Add Todo Item"
						style={{ flex: "10", padding: "5px" }}
					/>
					<input
						type="submit"
						value="Submit"
						className="btn"
						style={{ flex: "1", padding: "5px" }}
					/>
				</div>
			</form>
		);
	}
}

export default AddTodo;
