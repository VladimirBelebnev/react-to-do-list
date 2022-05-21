import './App.scss';
import AppInput from '../appInput/AppInput';

const App = () => {
  	return (
    	<div className='App'>
			<h2 className="App-header">React toDo</h2>
				<p className="App-desc"><b>React toDo</b> – список дел и таск–менеджер №1 в мире. <br />
			Мощный инструмент. Стоит только попробовать.</p>
			<AppInput />
		</div>
	);
};		

export default App;
