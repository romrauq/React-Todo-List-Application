import React, { Component } from "react";

class AddTodo extends Component {
	state = {
		title: "",
	};

	// Get value from input field and update AddTodo's state:
	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	// onSubmit funtion:
	onSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.title);
		this.setState({ title: "" });
	};

	render() {
		return (
			<form onSubmit={this.onSubmit}>
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
						value={this.state.title}
						onChange={this.onChange}
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
