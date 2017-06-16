export const apiMiddleware = ({
  dispatch
}) => next => action => {
  if (action.type !== 'API') return next(action)

  const {
    request,
    success,
    pending,
    error
  } = action.payload

  dispatch(pending)

  request.then(response =>
      dispatch({
        type: success,
        response
      }))
    .catch(
      err =>
      dispatch({
        type: error,
        err
      })
    )

}
