const express = require('express')
const cors = require('cors')
const todoService = require('./services/todo-service-db') // With mongoDB
// const todoService = require('./services/todo-service') // With local variable
const app = express()


app.use(express.json())


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    }
    app.use(cors(corsOptions))
}




app.get('/api/todo/', async (req, res) => {
    try {
        const todos = await todoService.query()
        res.send(todos)
    } catch (err) {
        res.status(500).send({ err: 'Failed to get todos' })
    }
})

app.delete('/api/todo/:id', async (req, res) => {
    try {
        const removedTodo = await todoService.remove(req.params.id)
        res.send(removedTodo)
    } catch (err) {
        res.status(500).send({ err: 'Failed to remove todo' })
    }
})

app.post('/api/todo/', async (req, res) => {
    try {
        const savedTodo = await todoService.add(req.body)
        res.send(savedTodo)
    } catch (err) {
        console.log(err);
        res.status(500).send({ err: 'Failed to add todo' })
    }
})
app.put('/api/todo/', async (req, res) => {
    try {
        const savedTodo = await todoService.update(req.body)
        res.send(savedTodo)
    } catch (err) {
        console.log(err);
        res.status(500).send({ err: 'Failed to add todo' })
    }
})


app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const port = process.env.PORT || 3030
app.listen(port)