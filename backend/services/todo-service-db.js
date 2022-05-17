const dbService = require('./db-service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    add,
    remove,
    update
}


async function query() {
    const collection = await dbService.getCollection('todo')
    const todos = await collection.find().toArray()
    return todos
}

async function add(todo) {
    todo.createdAt = Date.now()
    const collection = await dbService.getCollection('todo')
    const savedTodo = await collection.insertOne(todo)
    return savedTodo.ops[0]
}

async function update(todo) {
    todo.updatedAt = Date.now()
    const collection = await dbService.getCollection('todo')
    const id = todo._id
    delete todo._id
    const savedTodo = await collection.updateOne({ '_id': ObjectId(id) }, { $set: todo })
    todo._id = id
    return todo

}

async function remove(todoId) {
    const collection = await dbService.getCollection('todo')
    const res = await collection.deleteOne({ '_id': ObjectId(todoId) })
    return res
}