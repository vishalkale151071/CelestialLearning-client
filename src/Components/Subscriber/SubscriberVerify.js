import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal  from "sweetalert2"
import { verifySubscriber } from '../../actions/subscriberActions';



function SubscriberVerify({match}) {
     const dispatch = useDispatch();
     const history = useHistory()
 
     const subscriberVerify = useSelector(state => state.subscriberVerify);
     const { loading, error, verify } = subscriberVerify;
 
     let token = match.params.token;
 
     useEffect(() => {
         if(error){
              Swal.fire({
                   icon : 'error' ,
                   text : `${error}`
              })
           if(verify){
                console.log("True")
                history.push('/subscriber/login')
           }
         }
     }, [ history , verify , error ]);
 
     const submitHandler = e => {
         e.preventDefault();
         dispatch(verifySubscriber(token));
     };
 
     return (
         <form onSubmit={submitHandler}>
             <button>Submit</button>
         </form>
     );
}

export default SubscriberVerify

