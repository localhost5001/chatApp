const express = require('express')
const http = require('http')
const randomColor = require('randomcolor')
const uuid = require('uuid')

const port = process.env.APP_PORT || 4001

const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)

const users = []
const connections = []

io.on('connection', (socket) => {
    console.log('new user connection')
    connections.push(socket)
    const color = randomColor()

    socket.username = 'Anonymous'
    socket.color = color

    const updateUsernames = () => {
        io.sockets.emit('get users', users)
    }

    socket.on('change_username', data => {
        const id = uuid.v4()
        socket.id = id
        socket.username = data.nickName
        users.push({ id, username: socket.username, color: socket.color })
        updateUsernames()
    })

    socket.on('disconnect', data => {
        if (!socket.username) {
            return
        }

        const idx = users.findIndex(u => u.id == socket.id)
        if (idx !== -1) {
            users.splice(idx, 1)
            updateUsernames()
            connections.splice(connections.indexOf(socket), 1)
        }
    })

    socket.on('typing', data => {
        socket.broadcast.emit('typing', {username: socket.username})
    })
})

server.listen(port)
console.log(`Server is listening on port ${port}`)
