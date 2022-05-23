import bin from './bin.png';
import starShow from './star.png';
import starDisable from './star-disable.png'
import './AppItem.scss';

const AppItem = ({task, toggleTask, toggleStar, removeTask, index}) =>  {
    return (
        <div 
            className="App-item"
            key={task.id} >
            <div 
                className={`App-item-text ${task.complete ? 'complete' : ''}`}
                onClick={() => toggleTask(task.id)} >{index}. {task.task}</div>  
            <div className="App-item-wrapper">
                <img 
                    className={`App-item-star ${task.star ? 'show' : ''}`}
                    alt="star"
                    src={task.star ? starShow : starDisable} 
                    onClick={() => toggleStar(task.id)}
                    />
                <img
                    className="App-item-trash"
                    src={bin}
                    alt="bin-trash"
                    onClick={() => removeTask(task.id)}
                />
            </div>
        </div>
    )
};

export default AppItem;