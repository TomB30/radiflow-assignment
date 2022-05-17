import { todoService } from "../../services/todoService"

export function loadTodos() {
    return async (dispatch) => {
        try {
            const todos = await todoService.query()
            dispatch({ type: 'SET_TODOS', todos })
        } catch (err) {
            console.log('err:', err)
        }
    }
}

export function removeTodo(todoId) {
    return async (dispatch) => {
        try {
            await todoService.remove(todoId)
            dispatch({ type: 'REMOVE_TODO', todoId })
        } catch (err) {
            console.log('err:', err)
        }
    }
}
export function saveTodo(todo) {
    return async (dispatch) => {
        try {
            const savedTodo = await todoService.save(todo)
            if(todo._id) {
                dispatch({ type: 'UPDATE_TODO', todo:savedTodo })
            } else {
                dispatch({ type: 'ADD_TODO', todo:savedTodo })
            }
        } catch (err) {
            console.log('err:', err)
        }
    }
}