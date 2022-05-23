import { useState } from 'react';
import AppForm from '../appForm/AppForm';
import AppItem from '../appItem/AppItem';
import './App.scss';

const App = () => {
	const [todos, setTodos] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);

	const setTodosFunc = (arr) => {
		setTodos(arr);
		localStorage.setItem('todos', JSON.stringify(arr));
	};
	
	const addTask = (userTask) => {
		if (userTask) {
			const newTask = {
				id: Math.random().toString(36).substr(2, 9),
				task: userTask,
				complete: false,
				star: false,
			};
			setTodosFunc([...todos, newTask]);
		}
	};

	const removeTask = (id) => {
		setTodosFunc([...todos.filter((task) => task.id !== id)]);
	};

	const handleToggleStar = (id) => {
		setTodosFunc([...todos.map((task) => 
			task.id === id ? { ...task, star: !task.star } : { ...task }
		)]);
	};

	const handleToggleComplete = (id) => {
		setTodosFunc([...todos.map((task) =>
			task.id === id ? { ...task, complete: !task.complete } : { ...task }
		)]);
	};

  	return (
    	<div className='App'>
			<h2 className="App-header">React toDo</h2>
				<p className="App-desc"><b>React toDo</b> – список дел и таск–менеджер №1 в мире. Мощный инструмент. Стоит только попробовать!</p>
			<AppForm 
				addTask={addTask}
				todos={todos} />
				{todos.map((task, i) => {
					return (
						<AppItem 
							task={task}
							key={task.id}
							toggleTask={handleToggleComplete}
							toggleStar={handleToggleStar}
							removeTask={removeTask}
							index={++i} />
					)
				})}
		</div>
	);
};		

export default App;