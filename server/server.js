const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
const pulicPath = path.join(__dirname,'../public');
const app = express();
const server = http.createServer(app);
const io =socketIO(server);

app.use(express.static(pulicPath));

io.on('connection',(socket)=>{
    console.log('new user connected.');
    socket.on('disconnect',()=>{
        console.log('User was disconnected.');
    });
  
    socket.on('createMessage',(message)=>{
        console.log('message',message);
    });
    socket.emit('newMessage',{
        from:'dfsdfdfs',
        text:'dfhsdhf dhgfhsg',
        createdAt:457
    });
});

// app.get('/',(req,res)=>{
//     res.render('index.html');
// });


server.listen(port,()=>console.log(`Server is up at port ${port}`));