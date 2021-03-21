import { Form, FormInput, FormGroup } from 'shards-react';
import React, { useState, useEffect} from 'react';
import { Card, CardHeader, CardTitle, CardBody, CardFooter, Button } from 'shards-react';
import '../styles/UserLogin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';

const AuthorLiveSession = ({ history }) => {

    const [meetingId,setMeetingId] = useState('');
    const [password,setPassword] = useState('');

    // useEffect(() => {

    //     history.push('/subscriber/dashboard')
    // },[])
    return(
        <div>
            <h3>Do you want to conduct a live session?
            Don't worry!! 

            video ka ek demo daalna hai isme
            
            </h3>
            <a href = "https://zoom.us/">Click here to schedule your meeting.</a>

            Did you schedule a zoom meeting?<br></br><br></br>
            <button onClick ="">Yes</button><br></br>
            <CardBody>
                    <CardTitle className="tex">Enter details</CardTitle>
                    <Form >
                        <FormGroup>
                            <label htmlFor="email">Meeting ID</label>
                            <FormInput
                                type="text"
                                id="#email"
                                placeholder="Email"
                                onChange={event => {
                                    setMeetingId(event.target.value);
                                    console.log(event.target.value)
                                }}
                            />
                        </FormGroup>
                        <FormGroup>
                            <label htmlFor="password">Meeting Password</label>
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
                            Submit
                        </Button>
                    </Form>
                </CardBody>
            <button onClick = "">No</button>
        </div>
        
    )
    
}

export default AuthorLiveSession