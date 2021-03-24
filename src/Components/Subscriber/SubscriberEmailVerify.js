import React from 'react';
import verify from '../Utils/verify';


function SubscriberEmailVerify({match,history}) {
   
    let token = match.params.token;
    console.log(token);
    const submitHandler = e => {
        e.preventDefault();
    
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
