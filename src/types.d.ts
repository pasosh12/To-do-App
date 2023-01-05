type Todo = {
    text:string;
    completed: boolean;
}
type AddTodo = (newTodo:string) => void

type ToggleComplete =(selectedTodo:Todo) => void