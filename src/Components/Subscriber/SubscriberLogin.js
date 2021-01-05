import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import login from "../../actions/userActions"
import { Form, FormInput, FormGroup } from 'shards-react';
import { Card, CardHeader, CardTitle, CardImg, CardBody, CardFooter, Button } from 'shards-react';
import "../styles/UserLogin.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

function SubscriberLogin({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            history.push('/');
        }
    }, [history, userInfo]);

    const submitHandler = e => {
        e.preventDefault();
        dispatch(login(email, password));
        setEmail('');
        setPassword('');
    };

    const profile = () => {
        history.push("/subscriber/profile")
    }

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
                        <Button className="button1" theme="success">Login</Button>
                    </Form>
                </CardBody>
                <CardFooter>
                    <a href="/subscriber/signup/">Not registered?</a>
                    <br />
                    <a href="/author/login">Are you an Author?</a>
                    <br />
                    <a href="/path_to_page">Having problems logging in?</a>
                </CardFooter>
            </Card>
        </div>
    );
}

export default SubscriberLogin;
