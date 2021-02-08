import React, { useState } from 'react';
import { Form, FormInput, FormGroup } from 'shards-react';
import { Card, CardHeader, CardTitle, CardBody, CardFooter, Button } from 'shards-react';
import Axios from 'axios';
import Swal from "sweetalert2"

export default function AuthorNewPassword({history}) {

    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword,setConfirm] = useState('');
    
    const submitHandler = e => {
        e.preventDefault();

        if (newPassword !== confirmNewPassword) {
            Swal.fire({
                                icon : 'info' ,
                                text : "Passwords do not match."
                           })
        } 
        else 
        {
            Axios.post("/author/updatepassword",{
                new_password:newPassword,
                confirm_password: confirmNewPassword
            }).then(res=>{
                
                Swal.fire({
                    icon : 'success' ,
                    text : `${res.data.message}`   
                })
                history.push("/author/login")
            }).catch(error=>{
                Swal.fire({
                            icon : 'error' ,
                            text : `${error.response.data.message}`
                        })
            })
    }
    };

    return (
        <div>
            <Card className="login" theme="info" style={{ maxWidth: '450px' }}>
                <CardHeader></CardHeader>
                {/* <CardImg src="https://place-hold.it/300x200" /> */}
                <CardBody>
                    <CardTitle className="tex">Create new password</CardTitle>
                    <Form onSubmit = {submitHandler}>
                        <FormGroup>
                            <label htmlFor="password">New Password</label>
                            <FormInput
                                type="password"
                                id="newPassword"
                                placeholder="New Password"
                                onChange={event => {
                                    setNewPassword(event.target.value);
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="confirmpassword">Confirm Password</label>
                            <FormInput
                                type="password"
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                onChange={event => {
                                    setConfirm(event.target.value);
                                }}
                            />
                        </FormGroup>
                        <Button className="button1" theme="success" >
                            Submit
                        </Button>
                    </Form>
                </CardBody>
                <CardFooter>
                    <a href="/author/login/">Log in</a>
                </CardFooter>
            </Card>
        </div>
    );
}
