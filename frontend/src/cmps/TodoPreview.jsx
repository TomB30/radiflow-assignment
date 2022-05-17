export const TodoPreview = ({ todo ,onRemoveTodo , onToggleTodo }) => {
    return (
        <li className="todo-preview">
            <span className={todo.isDone ? 'done' : ''} onClick={()=> onToggleTodo({...todo , isDone : !todo.isDone})}>
                {todo.txt}
            </span>
            <button className="btn failure" onClick={() => onRemoveTodo(todo._id)}>X</button>
        </li>
    )
}