import { actionTypes } from "./actionTypes"
export const loginUser = (user) => {
  return {
    type: actionTypes.LOG_IN_USER,
    payload: user
  }
}

export const clearLoggedUser = () => {
  return {
    type: actionTypes.CLEAR_LOGGED_USER
  }
}