import axios from 'axios'
import {
  
  AUTHOR_LOGIN_FAIL,
  AUTHOR_LOGIN_REQUEST,
  AUTHOR_LOGIN_SUCCESS,
  AUTHOR_LOGOUT,

  AUTHOR_REGISTER_FAIL,
  AUTHOR_REGISTER_REQUEST,
  AUTHOR_REGISTER_SUCCESS,
  
  AUTHOR_VERIFY_REQUEST,
  AUTHOR_VERIFY_SUCCESS,
  AUTHOR_VERIFY_FAIL,

} from '../constants/userConstants'


export const register = (username, email, password , confirm_password) => async (dispatch) => {
     try {
       dispatch({
         type: AUTHOR_REGISTER_REQUEST,
       })
   
       await axios.post(
         '/author/register',
         { username, email, password , confirm_password },
       ).then(res => {
            dispatch({
                 type : AUTHOR_REGISTER_SUCCESS ,
                 payload : "An Email has been sent to you."
            })
       })
       
     } catch (error) {
       dispatch({
         type: AUTHOR_REGISTER_FAIL,
         payload:
           error.response && error.response.data.message
             ? error.response.data.message
             : error.message,
       })
     }
   }

   export const verifyAuthor = (token) => async (dispatch) => {
     try {
       dispatch({
         type:AUTHOR_VERIFY_REQUEST,
       })
   
       await axios.post(
         '/author/verify',
         { token },
       )
       dispatch({
         type:AUTHOR_VERIFY_SUCCESS,
       })
       
       
     } catch (error) {
       dispatch({
         type:AUTHOR_VERIFY_FAIL,
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
         type: AUTHOR_LOGIN_REQUEST,
       })
   
       const config = {
         headers: {
           'Content-Type': 'application/json',
         },
       }
   
       const { data } = await axios.post(
         '/author/login',
         { email, password },
         config
       )
   
       dispatch({
         type: AUTHOR_LOGIN_SUCCESS,
         payload: data,
       })
   
       localStorage.setItem('authorInfo', JSON.stringify(data))
     } catch (error) {
       dispatch({
         type: AUTHOR_LOGIN_FAIL,
         payload:
           error.response && error.response.data.message
             ? error.response.data.message
             : error.message,
       })
     }
   }

   export default login 