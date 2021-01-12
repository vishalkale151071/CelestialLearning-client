import React, { useEffect } from 'react';
import {verifyAuthor} from "../../actions/authorActions"
import { useDispatch, useSelector } from 'react-redux';


function AuthorVerify({ match, history }) {
    const dispatch = useDispatch();

    const authorVerify = useSelector(state => state.authorVerify);
    const {  verify } = authorVerify;


    let token = match.params.token;

    useEffect(() => {
        if (verify) {
            history.push('/author/login');
        }
    }, [verify, history]);

    const submitHandler = e => {
        e.preventDefault();
        dispatch(verifyAuthor(token));

    };

    return (
        <form onSubmit={submitHandler}>
            <button>Submit</button>
        </form>
    );
}

export default AuthorVerify;
