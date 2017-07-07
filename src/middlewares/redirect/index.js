export const redirectMiddleware = ({
  dispatch
}) => next => action => {

  if (typeof action.payload === "undefined") return next(action)

  let status = isNaN(parseInt(action.payload.status)) ? 0 : parseInt(action.payload.status)

  if (status !== 401 || status === 0) return next(action)

  let redirectTo = ""

  if (String(action.payload.redirectTo) === "") {
    let pathArray = window.location.href.split('/')
    let protocol = pathArray[0]
    let host = pathArray[2]
    let url = protocol + '//' + host
    redirectTo = url + "/login"
  } else
    redirectTo = String(action.payload.redirectTo)

  return dispatch({
    type: "LOGIN_REDIRECT",
    payload: {
      redirectTo
    }
  })

}
