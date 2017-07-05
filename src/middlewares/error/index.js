export const errorMiddleware = ({
  dispatch
}) => next => action => {

  if (action.type.indexOf('ERROR') !== -1) next(Object.assign(action, {
    type: "ERROR"
  }))

  return next(action)
}
