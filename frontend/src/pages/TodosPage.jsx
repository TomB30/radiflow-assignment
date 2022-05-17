import { Fragment, useEffect, useState, } from "react"
import { TodoList } from '../cmps/TodoList'
import { useDispatch, useSelector } from "react-redux"
import { loadTodos, removeTodo, saveTodo } from "../store/actions/todoActions"

export const TodoPage = () => {

    const dispatch = useDispatch()
    const { todos } = useSelector(state => state.todoModule)
    const [newTodo, setNewTodo] = useState({ txt: '' })
    useEffect(() => {
        dispatch(loadTodos())
        // eslint-disable-next-line
    }, [])

    const onRemoveTodo = async (todoId) => {
        dispatch(removeTodo(todoId))
    }

    const handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        setNewTodo({ [field]: value })
    }

    const onAddTodo = async (ev) => {
        ev.preventDefault()
        await dispatch(saveTodo(newTodo))
        setNewTodo({ txt: '' })
    }

    const onToggleTodo = (todo) => {
        dispatch(saveTodo(todo))
    }
    const isFullList = (todos.length <= 10 && newTodo.txt)
    return (
        <section className="todos-page">
            <h1>Todos Page</h1>
            {
                todos && <TodoList todos={todos} onRemoveTodo={onRemoveTodo} onToggleTodo={onToggleTodo}></TodoList>
            }
            <form>
                <label>
                    Add new todo:
                    <input type="text" disabled={todos.length > 10} placeholder="Enter a task" name="txt" value={newTodo.txt} required onChange={handleChange} />
                </label>
                <button className={'btn ' + ((isFullList) ? 'primary' : 'failure')} disabled={!isFullList} onClick={onAddTodo}>Add</button>
                {
                    todos.length > 10 &&
                    <Fragment>
                        <p>To add a new task, first delete one.</p>
                        <p>Maximum amount of tasks allowed is 10.</p>
                    </Fragment>
                }
            </form>
        </section>
    )
}