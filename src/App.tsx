import React, { useState } from 'react';
import {TodoForm} from "./components/TodoForm";
import {TodoList} from "./components/TodoList";
import './App.css'

function App() {
    const [todos, setTodos] = useState<Array<Todo>>([]);

    const toggleComplete: ToggleComplete = selectedTodo => {
        const updatedTodos = todos.map(todo => {
            if (todo === selectedTodo) {
                return { ...todo, completed:  !todo.completed };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };
    const addTodo: AddTodo = newTodo => {
        if (newTodo !== "") {
            setTodos([...todos, { text: newTodo, completed: false }]);
        }
    };

    return (
        <div className="todo-app">
            <header>
                <h1>
                    To-do List App
                </h1>
                <TodoForm addTodo={addTodo}/>
                <TodoList todos={todos} toggleComplete={toggleComplete} />
            </header>
        </div>
    );
};
export default App;