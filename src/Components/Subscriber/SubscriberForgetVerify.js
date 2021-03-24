import React from 'react';
import verify from '../Utils/verify';


function SubscriberForgetVerify({match,history}) {
    
    let token = match.params.token;
    console.log(token); 
 
     const submitHandler = e => {
         e.preventDefault();
        
        if(token)
        {
            verify('/subscriber/forgetpasswordverify', '/subscriber/forgetpasswordupdate', token, history);
        }
     };
 
     return (
         <form onSubmit={submitHandler}>
             <button>Submit</button>
         </form>
     );
}

export default SubscriberForgetVerify
