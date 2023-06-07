require('dotenv').config()
const express = require('express')
const cors = require('cors')
const server = express()
// export uploads folder to client



require('./db/connection')
const router = require('./Routes/router')
server.use(cors())
server.use(express.json())
server.use(router)
const PORT = 4000 || process.env.PORT
server.use('/uploads',express.static('./uploads'))


server.listen(PORT,()=>{
    console.log(`EMS server started at port number ${PORT}`);
})

server.get('/',(req,res)=>{
    res.send('EMS server started.....')
})