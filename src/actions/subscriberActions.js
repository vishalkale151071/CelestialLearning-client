import axios from 'axios'
import {
  
  SUBSCRIBER_LOGIN_FAIL,
  SUBSCRIBER_LOGIN_REQUEST,
  SUBSCRIBER_LOGIN_SUCCESS,
  SUBSCRIBER_LOGOUT,

  SUBSCRIBER_REGISTER_FAIL,
  SUBSCRIBER_REGISTER_REQUEST,
  SUBSCRIBER_REGISTER_SUCCESS,
  
  SUBSCRIBER_VERIFY_REQUEST,
  SUBSCRIBER_VERIFY_SUCCESS,
  SUBSCRIBER_VERIFY_FAIL,

} from '../constants/userConstants'

export const register = (username, email, password , confirm_password) => async (dispatch) => {
     try {
       dispatch({
         type: SUBSCRIBER_REGISTER_REQUEST,
       })
   
       await axios.post(
         '/subscriber/register',
         { username, email, password , confirm_password },
       ).then(res => {
            dispatch({
                 type : SUBSCRIBER_REGISTER_SUCCESS ,
                 payload : "An Email has been sent to you."
            })
       })
       
     } catch (error) {
       dispatch({
         type: SUBSCRIBER_REGISTER_FAIL,
         payload:
           error.response && error.response.data.message
             ? error.response.data.message
             : error.message,
       })
     }
   }

   export const logout = () => (dispatch) => {
     localStorage.removeItem('isSubscriber')
     dispatch({
       type : SUBSCRIBER_LOGOUT  
     })
   }

   export const verifySubscriber = (token) => async (dispatch) => {
     try {
       dispatch({
         type:SUBSCRIBER_VERIFY_REQUEST,
       })
   
       await axios.post(
         '/subscriber/verify',
         {} ,
         {
           headers : {
             'Authorization' : `Bearer ${token}`
           }
         }
       )
       dispatch({
         type:SUBSCRIBER_VERIFY_SUCCESS,
       })
       
       
     } catch (error) {
       dispatch({
         type:SUBSCRIBER_VERIFY_FAIL,
         payload:
           error.response && error.response.data.message
             ? error.response.data.message
             : error.message,
       })
     }
   }


   const login = (email, password) => async (dispatch) => {
     try {
       dispatch({
         type: SUBSCRIBER_LOGIN_REQUEST,
       })
   
       const config = {
         headers: {
           'Content-Type': 'application/json',
         },
       }
   
       const { data } = await axios.post(
         '/subscriber/login',
         { email, password },
         config
       )

       console.log("Call here")
   
       dispatch({
         type: SUBSCRIBER_LOGIN_SUCCESS,
         payload: data,
       })
   
       //localStorage.setItem('isSubscriber', true )
     } catch (error) {
       dispatch({
         type: SUBSCRIBER_LOGIN_FAIL,
         payload:
           error.response && error.response.data.message
             ? error.response.data.message
             : error.message,
       })
     }
   }

   export default login 