import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import login from "../../actions/authorActions"
import { Form, FormInput, FormGroup } from 'shards-react';
import { Card, CardHeader, CardTitle, CardImg, CardBody, CardFooter, Button } from 'shards-react';
import "../styles/UserLogin.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import Swal from 'sweetalert2'

function AuthorLogin({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const authorLogin = useSelector(state => state.authorLogin);
    const { loading, error, authorInfo } = authorLogin;

    useEffect(() => {
        if (authorInfo) {
            history.push('/');
        }
        if(error){
             Swal.fire({
                  icon : 'error' ,
                  text : `${error}`
             })
        }
    }, [history, authorInfo]);

    const submitHandler = e => {
        e.preventDefault();
        dispatch(login(email, password));
        
    };
    return (
        <div className="loginclass">
            <Card className="login" theme="info" style={{ maxWidth: '450px' }}>
                <CardHeader></CardHeader>
                {/* <CardImg src="https://place-hold.it/300x200" /> */}
                <CardBody>
                    <CardTitle className="tex">Author Login</CardTitle>
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
                        <Button className="button1" theme="success">Login</Button>
                    </Form>
                </CardBody>
                <CardFooter>
                    <a href="/author/signup/">Not registered?</a>
                    <br />
                    <a href="/subscriber/login">Are you a Subscriber?</a>
                    <br />
                    <a href="/path_to_page">Having problems logging in?</a>
                </CardFooter>
            </Card>
        </div>
    );
}

export default AuthorLogin;
