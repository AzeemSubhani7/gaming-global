import logger from 'redux-logger'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { actionTypes } from './actionTypes'

const initialState = null

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.LOG_IN_USER:{
      return { ...state,  user: action.payload }
    }
    case actionTypes.CLEAR_LOGGED_USER: {
      return null
    }
    default:
      return state;
  }
}

export const reducer = combineReducers({
  userState: userReducer 
})

export const store = createStore(reducer, applyMiddleware(logger))