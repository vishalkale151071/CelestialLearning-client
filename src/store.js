import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
     subscriberLoginReducer ,
     subscriberVerifyReducer ,
     subscriberRegisterReducer ,
     authorLoginReducer ,
     authorVerifyReducer ,
     authorRegisterReducer 
   } from './reducers/userReducer'

   const initialState = {}

   const reducer = combineReducers({
     
     subscriberLogin : subscriberLoginReducer ,
     subscriberRegister : subscriberRegisterReducer ,
     subscriberVerify : subscriberVerifyReducer ,

     authorLogin : authorLoginReducer ,
     authorRegister : authorRegisterReducer ,
     authorVerify : authorVerifyReducer 
     
   })
   const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store