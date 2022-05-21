import { useState } from 'react';
import AppForm from '../appForm/AppForm';
import AppItem from '../appItem/AppItem';

import './App.scss';

const App = () => {
	const [todos, setTodos] = useState([]);

	const addTask = (userInput) => {
		if (userInput) {
			const newItem = {
				id: Math.random().toString(36).substr(2, 9),
				task: userInput,
				complete: false,
				star: false,
				index: 1,
			};
			setTodos([...todos, newItem]);
		}
	};

	const removeTask = (id) => {
		setTodos([...todos.filter((task) => task.id !== id) ]);
	};

	const handleToggleStar = (id) => {
		setTodos([...todos.map((task) =>
			task.id === id ? { ...task, star: !task.star } : { ...task }
		)])
	};

	const handleToggle = (id) => {
		setTodos([...todos.map((task) => 
			task.id === id ? {...task, complete: !task.complete} : {...task}
		)])
	};

  	return (
    	<div className='App'>
			<h2 className="App-header">React toDo</h2>
				<p className="App-desc"><b>React toDo</b> – список дел и таск–менеджер №1 в мире. <br />
			Мощный инструмент. Стоит только попробовать.</p>
			<AppForm 
				addTask={addTask}
				todos={todos} />
			{todos.map((task, i) => {
				return (
					<AppItem 
						task={task}
						key={task.id}
						toggleTask={handleToggle}
						toggleStar={handleToggleStar}
						removeTask={removeTask}
						index={++i}
					/>
				)
			})}
		</div>
	);
};		

export default App;