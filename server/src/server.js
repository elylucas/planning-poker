import Server from 'socket.io';

export default function startServer(store){
  const io = new Server().attach(8090);

  io.set('origins', 'http://localhost:8080');
  io.on('connection', (socket) => {
    //socket.emit('state', store.getState().toJS());
    //socket.on('createRoom', store.dispatch.bind(store));
    socket.on('createRoom', (data) => {
      console.log(data);
      socket.emit('roomCreated', data);
    });
  });

  // io.on('connection', (socket) =>{
  //   socket.emit('news', {hello: 'world'});
  //   setInterval(() => {
  //     socket.emit('news', {hello: 'world'});
  //   },1000);
  //   socket.on('my other event', (data) =>{
  //     console.log(data);
  //   })
  // })
}
