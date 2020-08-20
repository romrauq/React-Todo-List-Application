import React from "react";

const Header = () => {
	return (
		<div style={headerStyle}>
			<h1>Todo List</h1>
		</div>
	);
};

const headerStyle = {
	fontSize: "2rem",
	textAlign: "Center",
	padding: "10px",
};

export default Header;
