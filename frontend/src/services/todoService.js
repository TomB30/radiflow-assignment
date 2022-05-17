import { httpService } from "./http.service";
export const todoService = {
    query,
    getById,
    save,
    remove,
}

const TODO = 'todo/'

async function query() {
    try {
        let todos = await httpService.get(TODO)
        return todos
    }catch(err){
        console.log('Could not get todos',err);
    }
}

async function getById(todoId) {
    try {
        const todo = await httpService.get(TODO+todoId)
        return todo
    } catch(err){
        console.log('Could not find todo with id',todoId,err);
    }
}

async function save(todo) {
    try {
        const savedtodo = (todo._id) ? _update(todo) : _add(todo)
        return savedtodo
    }catch(err){
        console.log('Failed to save todo',err);
    }
}

async function remove(todoId) {
    try {
        const removedtodo = await httpService.delete(TODO+todoId)
        return removedtodo
    }catch(err){
        console.log('Could not remove todo with id',todoId, err);
    }
}


async function _add(todo){
    try {
        const addedTodo = await httpService.post(TODO,todo)
        return addedTodo
    }catch(err){
        console.log('Could not add todo',err);
    }
}
async function _update(todo){
    try {
        const updatedtodo = await httpService.put(TODO,todo)
        return updatedtodo
    }catch(err){
        console.log('Could not add todo',err);
    }
}
