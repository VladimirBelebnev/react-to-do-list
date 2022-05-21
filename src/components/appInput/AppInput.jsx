

import './AppInput.scss';

const AppInput = () => {
    return (
        <div className="App-btn-wrapper">
            <input className="App-input" placeholder="Добавьте ваши планы на день" />
            <button className="App-btn">Добавить</button>
        </div>
    )
};

export default AppInput;