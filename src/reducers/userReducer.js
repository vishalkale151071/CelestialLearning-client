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





export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true };
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload };
        case USER_LOGIN_FAIL:
            return { loading: false, error: action.payload };
        case USER_LOGOUT:
            return {};
        default:
            return state;
    }
};

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return { loading: true };
        case USER_REGISTER_SUCCESS:
            return { loading: false };
        case USER_REGISTER_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};


   export const subscriberRegisterReducer = (state = {}, action) => {
     switch (action.type) {
       case SUBSCRIBER_REGISTER_REQUEST:
         return { loading: true}
       case SUBSCRIBER_REGISTER_SUCCESS:
         return { loading: false , success : true , message : action.payload}
       case SUBSCRIBER_REGISTER_FAIL:
         return { loading: false, error: action.payload }
       default:
         return state
     }
   } 

   export const subscriberVerifyReducer = (state = {}, action) => {
     switch (action.type) {
       case SUBSCRIBER_VERIFY_REQUEST:
         return { loading: true }
       case SUBSCRIBER_VERIFY_SUCCESS:
         return { loading: false, verify:true }
       case SUBSCRIBER_VERIFY_FAIL:
         return { loading: false, error: action.payload }
       default:
         return state
     }
   }

   export const subscriberLoginReducer = (state = {}, action) => {
     switch (action.type) {
       case SUBSCRIBER_LOGIN_REQUEST:
         return { loading: true }
       case SUBSCRIBER_LOGIN_SUCCESS:
         return { loading: false, subscriberInfo : action.payload }
       case SUBSCRIBER_LOGIN_FAIL:
         return { loading: false, error: action.payload }
       case SUBSCRIBER_LOGOUT:
         return {}
       default: return state 
     }
}

export const authorRegisterReducer = (state = {}, action) => {
     switch (action.type) {
       case AUTHOR_REGISTER_REQUEST:
         return { loading: true}
       case AUTHOR_REGISTER_SUCCESS:
         return { loading: false , success : true , message : action.payload}
       case AUTHOR_REGISTER_FAIL:
         return { loading: false, error: action.payload }
       default:
         return state
     }
   } 

   export const authorVerifyReducer = (state = {}, action) => {
     switch (action.type) {
       case AUTHOR_VERIFY_REQUEST:
         return { loading: true }
       case AUTHOR_VERIFY_SUCCESS:
         return { loading: false, verify:true }
       case AUTHOR_VERIFY_FAIL:
         return { loading: false, error: action.payload }
       default:
         return state
     }
   }

   export const authorLoginReducer = (state = {}, action) => {
     switch (action.type) {
       case AUTHOR_LOGIN_REQUEST:
         return { loading: true }
       case AUTHOR_LOGIN_SUCCESS:
         return { loading: false, authorInfo : action.payload }
       case AUTHOR_LOGIN_FAIL:
         return { loading: false, error: action.payload }
       case AUTHOR_LOGOUT:
         return {}
       default: return state 
     }
}

