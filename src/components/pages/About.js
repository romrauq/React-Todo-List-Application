import React from "react";

const About = () => {
	return (
		<React.Fragment>
			<h1 style={aboutStyles}>About Application</h1>
			<p style={textStyles}>Todo List App v1.0.0</p>
			<p style={textStyles}>Created using React</p>
		</React.Fragment>
	);
};

const aboutStyles = {
	textAlign: "center",
};

const textStyles = {
	fontSize: "1.5rem",
};

export default About;
