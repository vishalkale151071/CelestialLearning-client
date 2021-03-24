import React from 'react';
import verify from '../Utils/verify';


function AuthorForgetVerify({match,history}) {
    
 
     let token = match.params.token;
    console.log(token);
    
 
     const submitHandler = e => {
         e.preventDefault();
        
        if(token)
        {
            verify('/author/forgetpasswordverify', '/author/forgetpasswordupdate', token, history);
        }
     };
 
     return (
         <form onSubmit={submitHandler}>
             <button>Submit</button>
         </form>
     );
}

export default AuthorForgetVerify
