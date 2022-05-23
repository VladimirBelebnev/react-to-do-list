import { useState } from 'react';
import './AppForm.scss';

const AppForm = ({ addTask, todos }) => {
    const [userInput, setUserInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addTask(userInput);
        setUserInput('');
    };

    const handleChange = (event) => {
        setUserInput(event.currentTarget.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSubmit(event);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                className="App-form" 
                placeholder="Добавьте ваши задачи на день" 
                type="text"
                value={userInput}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                tabIndex={1} />
            <div className="App-wrapper">
                <h2 className="App-form-count">Список задач: {todos.length}</h2>
                <button tabIndex={2} className="App-btn">Добавить</button>
            </div>
        </form>
    )
};

export default AppForm;