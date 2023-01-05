import React from "react";
interface TodoListItemProps {
    todo: Todo;
    toggleComplete: ToggleComplete;
}
export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleComplete }) => {
    return (
        <li>
            <label className={todo.completed ? "todo-row completed" : "todo-row"}>
                <input
                    type="checkbox"
                    onChange={() => toggleComplete(todo)}
                    checked={todo.completed}
                />
                {todo.text}
            </label>
        </li>
    )
}