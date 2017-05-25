

export default session => store => next => action => {
  if (action.meta) {
    action.meta(session, action);
  }
  return next(action);
}
