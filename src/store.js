import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
     userLoginReducer,
     userRegisterReducer,
     userVerifyReducer,
   } from './reducers/userReducer'

   const initialState = {}

   const reducer = combineReducers({
     
     userLogin: userLoginReducer,
     userRegister: userRegisterReducer,
     userVerify:userVerifyReducer,
     
   })
   const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store