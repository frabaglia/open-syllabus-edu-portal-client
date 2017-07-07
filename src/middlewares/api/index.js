export const apiMiddleware = ({
  dispatch
}) => next => action => {
  if (action.type !== 'API') return next(action)

  // console.debug("Dispatching");
  const {
    request,
    success,
    pending,
    error
  } = action.payload

  dispatch({
    type: pending
  })

  request.then(response =>
      dispatch({
        type: success,
        payload: {
          ...response
        }
      }))
    .catch(
      err =>
      dispatch({
        type: error,
        payload: {
          ...err
        }
      })
    )
}
