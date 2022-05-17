module.exports = {
    query,
    getById,
    add,
    remove,
    update
}

let gTodos = [
    {
        _id: 't101',
        txt: 'Do This!',
        createdAt: Date.now(),
        isDone: false,
    },
    {
        _id: 't102',
        txt: 'Do Mashu!',
        createdAt: Date.now(),
        isDone: false,
    },
    {
        _id: 't103',
        txt: 'Do That!',
        createdAt: Date.now(),
        isDone: false,
    },
    {
        _id: 't104',
        txt: 'Do Something!',
        createdAt: Date.now(),
        isDone: false,
    },
    {
        _id: 't105',
        txt: 'Do It!',
        createdAt: Date.now(),
        isDone: false,
    },
]


async function query() {
    return Promise.resolve(gTodos)
}

async function getById(todoId) {
    const todo = gTodos.find(t => t._id === todoId)
    return (todo) ? Promise.resolve(todo) : Promise.reject('Could not find todo with id' + todoId)
}

async function add(todo) {
    if(gTodos.length >= 10) return Promise.reject('To add another todo, first delete some')
    todo._id = _makeId()
    todo.createdAt = Date.now()
    todo.isDone = false
    gTodos.push(todo)
    return Promise.resolve(todo)
}

async function update(todo) {
    todo.updatedAt = Date.now()
    const idx = gTodos.findIndex(t => t._id === todo._id)
    gTodos.splice(idx,1,todo)
    return Promise.resolve(todo)
}

async function remove(todoId){
    const idx = gTodos.findIndex(t => t._id === todoId)
    const removedTodo = gTodos.splice(idx,1)[0]
    return Promise.resolve(removedTodo)
}

function _makeId(length = 5) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
