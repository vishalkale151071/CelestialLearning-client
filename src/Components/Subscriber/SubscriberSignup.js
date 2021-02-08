import React, { useState } from 'react';
import { Form, FormInput, FormGroup } from 'shards-react';
import { Card,  CardTitle, CardBody, CardFooter, Button } from 'shards-react'
import '../styles/UserSignUp.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import Swal from "sweetalert2"
import Axios from 'axios';


function SubscriberSignup() {
     const [name, setName] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitHandler = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            Swal.fire({
                                icon : 'info' ,
                                text : "Passwords do not match."
                           })
        } else {
            
            Axios.post("/subscriber/register",{
                username: name,
                email,
                password,
                confirm_password : confirmPassword
            }).then(res=>{
                Swal.fire({
                    icon : 'success' ,
                    text : `${res.data.message}`
               })
            }).catch(error=>{
                Swal.fire({
                    icon : 'error' ,
                    text : `${error.response.data.message}`
               })
            })
            

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

