import React from 'react';
import verify from '../Utils/verify';


function AuthorEmailVerify({match,history}) {
 
     let token = match.params.token;
    console.log(token);

 
     const submitHandler = e => {
         e.preventDefault();
       
        if(token)
        {
            verify('/author/verify1', '/author/login', token, history);
        } 
     };
 
     return (
         <form onSubmit={submitHandler}>
             <button>Submit</button>
         </form>
     );
}

export default AuthorEmailVerify
