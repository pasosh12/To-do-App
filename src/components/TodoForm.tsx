import React, {useState, ChangeEvent, FormEvent} from 'react';


interface TodoFormProps{
    addTodo:AddTodo;
}
export const TodoForm : React.FC<TodoFormProps> = ({addTodo}) => {

    const [newTodo, setNewTodo] = useState<string>("");

    const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
        setNewTodo(e.target.value)
    }
    const handleSubmit=(e:FormEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo('')
    }
    return (
        <form className="todo-form">
            <input type="text" value={newTodo} onChange={handleChange} className="todo-input"
                   placeholder="Add a todo" />

            <button type="submit" onClick={handleSubmit} className="todo-button">
                Add Todo
            </button>
        </form>
    )
};