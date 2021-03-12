import * as express from 'express'
import * as mongoose from 'mongoose'
import { Server, Socket } from 'socket.io'

import middleware from './webServerMiddleware'
import websocket from '../websocket/websocket'
import { MONGO_URI, PORT } from '../config/keys'

const app = express()
let http = require('http').Server(app);
const io = new Server(http, {})

middleware(app)

io.attach(http)
io.on('connection', (socket: Socket) => websocket(socket))

mongoose.connect(MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true  
}, (err: any) => {
    if (err) console.log('Error on MongoDB connection', err)
    else console.log('Connected to MongoDB')
})

export default http.listen(PORT, () => {
    console.log(`Server runs on ${PORT}`)
})