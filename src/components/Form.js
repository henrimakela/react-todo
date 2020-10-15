import React from 'react'
import '../App.css';

const Form = (props) => {

    // Functions
    const inputTextHandler = (e) => {
        props.setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        props.setTodos([
            ...props.todos, {
                text: props.inputText, 
                completed: false,
                id: Math.random() * 1000
            }
        ]);
        props.setInputText('');
    }
    const filterHandler = (e) => {
        props.setFilter(e.target.value);
    }

    return(
        <form>
            <input type="text" className="todo-input" value={props.inputText} onChange={inputTextHandler} />
            <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={filterHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form;