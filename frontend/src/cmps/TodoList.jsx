import { TodoPreview } from "./TodoPreview"

export const TodoList = ({ todos, onRemoveTodo, onToggleTodo }) => {
    return (
        <ul className="todo-list">
            {todos && todos.map(t => <TodoPreview key={t._id} todo={t} onRemoveTodo={onRemoveTodo} onToggleTodo={onToggleTodo}></TodoPreview>)}
        </ul>
    )
}