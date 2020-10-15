import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {

  // States
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([])

  useEffect(() => {
    getLocalTodos();
  }, [])

  useEffect(() => {
    filterTodosHandler();
    saveLocalTodos();
  }, [todos, filter])

  // Functions
  const filterTodosHandler = () => {
    switch(filter){
      case 'completed': 
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;

      case 'uncompleted': 
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  }

  // Storage
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todosFromLocal = JSON.parse( localStorage.getItem('todos') );
      setTodos(todosFromLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Todo list</h1>
      </header>
      <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos}
        setFilter={setFilter}
        />
      <TodoList 
        todos={todos} 
        filteredTodos={filteredTodos} 
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
