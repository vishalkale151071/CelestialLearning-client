import React, { useState } from 'react';
import AuthorHeader from './AuthorHeader';
import { Tabs, Tab } from 'react-bootstrap';
import { Form, FormInput, FormGroup } from 'shards-react';
import { Button } from 'shards-react';
import Axios from 'axios';
import Swal from 'sweetalert2';

export default function AuthorSettings({ history }) {
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const submitHandler = e => {
        e.preventDefault();

        Axios.post('/author/emailchange', {
            new_email: email,
            password: oldPassword
        })
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    text: `${res.data.message}`
                });
            })
            .catch(error => {
                if (error.response.data.message === 'Unauthorised.') {
                    history.push('/author/login');
                } else if (error.response.data.message === 'Current email address entered.') {
                    Swal.fire({
                        icon: 'info',
                        text: `${error.response.data.message}`
                    });
                } else {
                    Swal.fire({
                        icon: 'error',
                        text: `${error.response.data.message}`
                    });
                }
            });
    };

    const submitPasswordUpdateHandler = e => {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            Swal.fire({
                icon: 'info',
                text: `Passwords do not match.`
            });
        } else {
            Axios.post('/author/passwordchange', {
                new_password: newPassword,
                old_password: oldPassword
            })
                .then(res => {
                    Swal.fire({
                        icon: 'success',
                        text: `${res.data.message}`
                    });
                })
                .catch(error => {
                    if (error.response.data.message === 'Unauthorised.') {
                        history.push('/author/login');
                    } else {
                        Swal.fire({
                            icon: 'error',
                            text: `${error.response.data.message}`
                        });
                    }
                });
        }
    };

    return (
        <div>
            <AuthorHeader history={history} />
            <div className="profiletab">
                <Tabs id="settingtab">
                    <Tab eventKey="personal" title="Email">
                        <Form className="subform" onSubmit={submitHandler}>
                            <FormGroup>
                                <label htmlFor="#email">Email</label>
                                <FormInput
                                    id="#email"
                                    onChange={event => {
                                        setEmail(event.target.value);
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#password">Old Password</label>
                                <FormInput
                                    id="#password"
                                    type="password"
                                    onChange={event => {
                                        setOldPassword(event.target.value);
                                    }}
                                />
                            </FormGroup>
                            <Button theme="info">Update</Button>
                        </Form>
                    </Tab>
                    <Tab eventKey="social" title="Password">
                        <Form className="subform" onSubmit={submitPasswordUpdateHandler}>
                            <FormGroup>
                                <label htmlFor="#oldopassword">Old Password</label>
                                <FormInput
                                    id="#oldopassword"
                                    type="password"
                                    onChange={event => {
                                        setOldPassword(event.target.value);
                                    }}
                                />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#newpassword">New Password</label>
                                <FormInput id="#newpassword" type="password" onChange={e => setNewPassword(e.target.value)} />
                            </FormGroup>
                            <FormGroup>
                                <label htmlFor="#confirmnewpasword">Confirm New Password</label>
                                <FormInput id="#confirmnewpasword" type="password" onChange={e => setConfirmPassword(e.target.value)} />
                            </FormGroup>
                            <Button theme="info">Update</Button>
                        </Form>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}
