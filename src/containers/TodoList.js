import React from 'react';
import style from './TodoList.css';

class TodoList extends React.Component {
	render() {
        return (
            <div>{this.props.todo.map((elem, i) => (
				<div className={style.Todo} key={i} onClick={() => this.props.remove(elem.id)}>{elem.id} {elem.text} </div>
			))} </div>
			
        );
    }
};

export default TodoList;