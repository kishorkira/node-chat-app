const socket = io();
socket.on('connect',function(){
    console.log('connected to server.');

   
    socket.emit('createMessage',{
        to:'djfbjds dgfh',
        text:'xvs chjzxc hzhc hh'
    });
});
socket.on('disconnect',function(){
    console.log('Disconnected from server.');
});


socket.on('newMessage',function(message){
    console.log('message',message);
});
