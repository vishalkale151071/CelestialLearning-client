import React, { useState} from 'react';

import { Form, FormInput, FormGroup } from 'shards-react';
import { Card, CardHeader, CardTitle, CardBody, CardFooter, Button } from 'shards-react';
import '../styles/UserLogin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

import Swal from 'sweetalert2'
import Axios from 'axios';
import Cookies from 'js-cookie';


function SubscriberLogin({history}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const submitHandler = e => {
        e.preventDefault();
        
        Axios.post("/subscriber/login",{
            email,password
        }).then(res=>{
            Cookies.set('u', 's');

            history.push('/subscriber/dashboard');
        }).catch(error=>{
            Swal.fire({
                        icon : 'error' ,
                        text : `${error.response.data.message}`
                    })
        })
       
    };

    return (
        <div className="loginclass">
            <Card className="login" theme="info" style={{ maxWidth: '450px' }}>
                <CardHeader></CardHeader>
                {/* <CardImg src="https://place-hold.it/300x200" /> */}
                <CardBody>
                    <CardTitle className="tex">Subscriber Login</CardTitle>
                    <Form onSubmit={submitHandler}>
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
                        <Button className="button1" theme="success">
                            Login
                        </Button>
                    </Form>
                </CardBody>
                <CardFooter>
                    <a href="/subscriber/signup/">Not registered?</a>
                    <br />
                    <a href="/author/login">Are you an Author?</a>
                    <br />
                    <a href="/subscriber/forgetpassword">Having problems logging in?</a>
                </CardFooter>
            </Card>
        </div>
    );
}

export default SubscriberLogin;
