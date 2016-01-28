

export default socket => store => next => action => {
    console.log('in middleware: ' + action.type)
  if (action.meta && action.meta.remote) {
    //const clientId = store.getState().get('clientId');
    socket.emit('createRoom', action.name);
  }
  return next(action);
}
