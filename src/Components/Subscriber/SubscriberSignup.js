import React, { useEffect, useState } from 'react';

import { Form, FormInput, FormGroup } from 'shards-react';
//import { register } from '../../actions/userActions';
import {register} from '../../actions/subscriberActions'
import { Card, CardHeader, CardTitle, CardImg, CardBody, CardFooter, Button } from 'shards-react';
import '../styles/UserSignUp.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import Swal from "sweetalert2"
import { useDispatch, useSelector } from 'react-redux';




function SubscriberSignup() {
     const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();

    const subscriberRegister = useSelector(state => state.subscriberRegister);
    const { loading, error ,success , message } = subscriberRegister;

//     const userLogin = useSelector(state => state.userLogin);
//     const { userInfo } = userLogin;

    useEffect(() => {
     

          if(error){
               Swal.fire({
                    icon : 'error' ,
                    text : `${error}`    
               })
               console.log("Error : " , error)
          }

          if(success){
               Swal.fire({
                    icon : 'success' ,
                    text : `${message}`
               })
          }
    }, [error ,success ]);


    const submitHandler = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.log('Passwords do not match');
        } else {
            // console.log("matched")
            dispatch(register(name, email, password, confirmPassword));
            console.log(`Activation Link Sent to ${email}`);
        }
    };

    return (
        <div className="signup">

            <Card className="sign" theme="info" style={{ maxWidth: '450px' }}>
                {/* <CardImg src="https://place-hold.it/300x200" /> */}
                <CardBody>
                    <CardTitle className="tex">Subscriber Signup</CardTitle>

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
                    <a href="/author/signup">Are you an Author?</a><br />
                    <a href="/subscriber/login">Existing User?</a>
                </CardFooter>
            </Card>
        </div>
    );
}

export default SubscriberSignup
