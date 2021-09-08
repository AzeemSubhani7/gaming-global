// Middleware logger
import logger from 'redux-logger'
// Redux Imports
import { createStore, combineReducers, applyMiddleware } from 'redux'
// Actions
import { actionTypes } from './actionTypes'
// Imports from REDUX PERSIST for using local storage
import { persistStore, persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage' // Default to Local Storage

/* We can also use Session storage  */
// import sessionStorage from 'redux-persist/es/storage/session'

// Initial State

const initialState = null

// REDUCERS

//------------------------------------//
//------------USER REDUCER------------//
//------------------------------------//
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

//------------------------------------//
//----------COMBINE REDUCERS----------//
//------------------------------------//

const rootReducer = combineReducers({
  userState: userReducer
})

//------------------------------------//
//-----------REDUX PERSIST------------//
//------------------------------------//

const persistConfig = {
  key: 'root',
  storage
}

//------------------------------------//
//----------PERSIST REDUCER-----------//
//------------------------------------//

export const persistedReducer = persistReducer(persistConfig, rootReducer)


//------------------------------------//
//------------REDUX STORE-------------//
//------------------------------------//


export const store = createStore(persistedReducer, applyMiddleware(logger))

//------------------------------------//
//------------PERSIST STORE-----------//
//------------------------------------//


export const persistor = persistStore(store)