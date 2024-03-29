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

  // https://opensyllabus.github.io/osp-api/rest-api.html#meta
  // https://opensyllabus.github.io/osp-api/rest-api.html#errors

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
