import React from "react";

const Header = () => {
	return (
		<div style={headerStyle}>
			<h1>Todo List</h1>
		</div>
	);
};

const headerStyle = {
	color: "white",
	fontSize: "2rem",
	textAlign: "Center",
	padding: "10px",
	marginBottom: "5px",
	backgroundColor: "#333",
	borderRadius: "10px 10px 0 0",
};

export default Header;
