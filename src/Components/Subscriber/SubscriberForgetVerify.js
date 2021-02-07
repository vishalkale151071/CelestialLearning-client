import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal  from "sweetalert2"
import { verifySubscriber } from '../../actions/subscriberActions';
import Axios from 'axios'


function SubscriberForgetVerify({match,history}) {
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
            Axios.post('/subscriber/forgetpasswordverify',
            {},
            {
                headers : {
                'Authorization' : `Bearer ${token}`
                }
            }).then(res=>{
                Swal.fire({
                            icon : 'success' ,
                            text : `${res.data.message}`
                        })
                        history.push('/subscriber/forgetpasswordupdate')
            }).catch(error=>{
                Swal.fire({
                            icon : 'error' ,
                            text : `${error.response.data.message}`
                        })
            })
        }
        
        
     };
 
     return (
         <form onSubmit={submitHandler}>
             <button>Submit</button>
         </form>
     );
}

export default SubscriberForgetVerify
