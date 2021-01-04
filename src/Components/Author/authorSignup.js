import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, FormInput, FormGroup } from 'shards-react';
import { register } from '../../actions/userActions';
import { Card, CardHeader, CardTitle, CardImg, CardBody, CardFooter, Button } from 'shards-react';
import '../styles/UserSignUp.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

function UserSignUp({ history }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();

    const userRegister = useSelector(state => state.userRegister);
    const { loading, error } = userRegister;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            history.push('/');
        }
    }, [history, userInfo]);

    const submitHandler = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.log('Passwords do not match');
        } else {
            dispatch(register(name, email, password, confirmPassword));
            console.log(`Activation Link Sent to ${email}`);
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        }
    };

    return (
        <div className="signup">
            <Card className="sign" theme="info" style={{ maxWidth: '450px' }}>
                {/* <CardImg src="https://place-hold.it/300x200" /> */}
                <CardBody>
                    <CardTitle className="tex">Author Signup</CardTitle>

                    <Form onSubmit={submitHandler}>
                        <FormGroup>
                            <label htmlFor="username">Username</label>
                            <FormInput
                                type="text"
                                id="username"
                                placeholder="Username"
                                onChange={event => {
                                    setName(event.target.value);
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="email">Email</label>
                            <FormInput
                                type="email"
                                id="email"
                                placeholder="Email"
                                onChange={event => {
                                    setEmail(event.target.value);
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="password">Password</label>
                            <FormInput
                                type="password"
                                id="#password"
                                placeholder="Password"
                                onChange={event => {
                                    setPassword(event.target.value);
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="confirmpassword">Confirm Password</label>
                            <FormInput
                                type="password"
                                id="confirmpassword"
                                placeholder="Confirm Password"
                                onChange={event => {
                                    setConfirmPassword(event.target.value);
                                }}
                            />
                        </FormGroup>
                        <Button theme="success">Sign Up</Button>
                    </Form>
                </CardBody>
                <CardFooter>
                    <a href="/subscriber/signup">Are you a Subscriber?</a><br />

                    <a href="/author/login">Existing User?</a>
                </CardFooter>
            </Card>
        </div>
    );
}

export default UserSignUp;
