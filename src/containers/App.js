import React from 'react';
import style from './App.css';
import Title from './Title.js';
import TodoList from './TodoList.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                id: 1,
                    text: 'clean room'
                }, {
                id: 2,
                    text: 'wash the dishes'
                }, {
                id: 3,
                    text: 'feed my cat'
                }
            ]
        };
    }
    
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    
    render() {
        return (
            <div className={style.TodoApp}>
                <Title title="Tytuł" count={this.state.data.length}/>
                <TodoList todo={this.state.data} remove={this.removeTodo.bind(this)}/>
            </div>
        );
    }
}

export default App;