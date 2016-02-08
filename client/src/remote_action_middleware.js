

export default socket => store => next => action => {
  if (action.meta) {
    action.meta(socket, action);
  }
  return next(action);
}
