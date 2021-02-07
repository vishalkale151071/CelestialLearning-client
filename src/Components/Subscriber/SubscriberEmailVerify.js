import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal  from "sweetalert2"
import { verifySubscriber } from '../../actions/subscriberActions';
import Axios from 'axios'
import verify from '../Utils/verify';


function SubscriberEmailVerify({match,history}) {
    //  const dispatch = useDispatch();
    //  const history = useHistory()
 
    //  const subscriberVerify = useSelector(state => state.subscriberVerify);
    //  const {  error, verify } = subscriberVerify;
 
     let token = match.params.token;
    console.log(token);
    
    //  useEffect(() => {
    //      if(error){
    //           Swal.fire({
    //                icon : 'error' ,
    //                text : `${error}`
    //           })
    //      }
    //      if(verify){
    //         console.log("True")
    //         history.push('/subscriber/login')
    //      }
    //  }, [ history , verify , error ]);
 
     const submitHandler = e => {
         e.preventDefault();
        //  dispatch(verifySubscriber(token));
        if(token)
        {
            verify('/subscriber/verify1', '/subscriber/login', token, history);
        } 
     };
 
     return (
         <form onSubmit={submitHandler}>
             <button>Submit</button>
         </form>
     );
}

export default SubscriberEmailVerify
