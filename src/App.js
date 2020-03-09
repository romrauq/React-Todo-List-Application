import React from 'react';
import './App.css';
import Todos from './components/Todos';


function App() {
	let state = {
		todos: [
		{
			id: 1,
			title: "Learn the React Basics",
			completed: false
		},
		{
			id: 2,
			title: "Practice the  React Basics",
			completed: false
		},
		{
			id: 3,
			title: "Master the  React Basics",
			completed: false
		},	
		]
	}

	return (
		<div className="App">
		<Todos />
		</div>
		);
	}

	export default App;
