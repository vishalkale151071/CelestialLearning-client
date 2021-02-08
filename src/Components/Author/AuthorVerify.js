import React from 'react';
import verify from '../Utils/verify';

function AuthorVerify({ match, history }) {
    
    let token = match.params.token;
    const submitHandler = e => {
        e.preventDefault();
      
       if(token)
       {
           verify('/author/verify', '/author/login', token, history);
           
       }
    };
    return (
        <form onSubmit={submitHandler}>
            <button>Submit</button>
        </form>
    );
}

export default AuthorVerify;
