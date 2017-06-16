import axios from 'axios'
import {
  configs
} from '../../os-toolkit/configs'

export const apiMiddleware = ({
  dispatch
}) => next => action => {
  if (action.type !== 'API') {
    return next(action)
  }

  const {
    payload
  } = action

  let apiPromise

  switch (action.payload.method) {
    case 'GET':
      {
        apiPromise = axios.get(configs.HOST + action.url)
      }
      break
    case 'POST':
      {
        apiPromise = axios.post(configs.HOST + action.url)
      }
      break
    case 'PUT':
      {
        apiPromise = axios.put(configs.HOST + action.url)
      }
      break
    case 'DELETE':
      {
        apiPromise = axios.delete(configs.HOST + action.url)
      }
      break

    default:
      return next(action)
  }

  apiPromise.then(response =>
      dispatch({
        type: payload.success,
        response
      }))
    .catch(
      error =>
      dispatch({
        type: payload.error,
        error
      })
    )

}
