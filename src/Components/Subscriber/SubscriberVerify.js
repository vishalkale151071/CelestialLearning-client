import React, { useEffect } from 'react';
import { verifyUser } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

function SubscriberVerify({ match, history }) {
    const dispatch = useDispatch();

    const userVerify = useSelector(state => state.userVerify);
    const { loading, error, verify } = userVerify;

    let token = match.params.token;

    useEffect(() => {
        if (verify) {
            history.push('/user/login');
        }
    }, [verify, history]);
    const submitHandler = e => {
        e.preventDefault();
        dispatch(verifyUser(token));
    };

    return (
        <form onSubmit={submitHandler}>
            <button>Submit</button>
        </form>
    );
}

export default SubscriberVerify;