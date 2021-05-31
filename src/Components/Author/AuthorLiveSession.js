import { Form, FormInput, FormGroup } from 'shards-react';
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardBody, CardFooter, Button } from 'shards-react';
import '../styles/UserLogin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'shards-ui/dist/css/shards.min.css';
import '../styles/AuthorLiveSession.css';
import Axios from 'axios';
import DatePicker from 'react-datepicker';
import { Dropdown} from 'react-bootstrap';
import Swal from 'sweetalert2'


const AuthorLiveSession = ({ history }) => {
    const [meetingName, setMeetingName] = useState('');
    const [meetingId, setMeetingId] = useState('');
    const [password, setPassword] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [courseList, setCourseList] = useState([]);
    const [SessionCourse, setSessionCourse] = useState('');
    const [SessionType, setSessionType] = useState('');


    useEffect(() => {
        Axios.get('/assessment/courseList')
            .then(res => {
                setCourseList(res.data['courseList']);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const submitHandler = () => {
        console.log(meetingName,meetingId,password,startDate,SessionType,SessionCourse)
        Axios.post('/author/liveSession',{
            meetingId,password,meetingName,courseName:SessionCourse,dateOfConduction:startDate
        })
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    text: `${res.data.message}`
                });
            })
            .catch(err => {
                console.log(err);
            });
    };

    const Course = () => {
        if (SessionType == 'Private')
        {
            return(
                <div>
                    Please Choose a course for Live Session:
                    <Dropdown className="createdropdown">
                            <Dropdown.Toggle variant="outline-primary" id="sesscourse">
                                Choose
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {courseList.map((course)=>(
                                <Dropdown.Item key={course} onClick={(e)=>{
                                    setSessionCourse(course)
                                    document.getElementById("sesscourse").innerHTML = 'kksmcsackm'
                                }}>{course}</Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    return (
        <div>
            <Card className="LiveSessionCard" style={{ maxWidth: '700px' }}>
                <CardBody>
                    <CardTitle className="tex">Live Session!</CardTitle>
                    <h3>Do you want to conduct a live session?</h3>
                    <p>Please go to the following link and host a meeting and enter the meeting details here.</p>
                    <a href="https://zoom.us/" target="_blank">
                        Click here to schedule your meeting.
                    </a>
                    <br></br>
                    <br></br>
                    <Form > 
                        <FormGroup>
                            <label htmlFor="meetingName">Meeting Name</label>
                            <FormInput
                                type="text"
                                id="#meetingName"
                                placeholder="Meeting Name"
                                onChange={event => {
                                    setMeetingName(event.target.value);
                                }}
                            />
                            <label htmlFor="meetingId">Meeting ID</label>
                            <FormInput
                                type="text"
                                id="#meetingId"
                                placeholder="Meeting ID"
                                onChange={event => {
                                    setMeetingId(event.target.value);
                                }}
                            />
                            <label htmlFor="meetingpassword">Meeting Password</label>
                            <FormInput
                                type="text"
                                id="#meetingpassword"
                                placeholder="Meeting Password"
                                onChange={event => {
                                    setPassword(event.target.value);
                                }}
                            />
                            <label className="ALSdatelabel">Meeting Date</label>

                            <DatePicker className="ALSdate" selected={startDate} onChange={date => setStartDate(date)} />
                        
                            <br></br><label className="ALSdatelabel">Is this a Public or Private Session</label>

                            <Dropdown className="createdropdown">
                            <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                                Choose
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={(e)=>{
                                    setSessionType("Public")
                                    document.getElementById("dropdown-basic").innerHTML = 'Public';

                                }}>Public</Dropdown.Item>

                                <Dropdown.Item onClick={(e)=>{
                                    setSessionType("Private") 
                                    document.getElementById("dropdown-basic").innerHTML = 'Private';
                                    
                                }}>Private</Dropdown.Item>
                                
                            </Dropdown.Menu>
                        </Dropdown>
                        <Course />
                        </FormGroup>

                        <Button onClick={submitHandler}  className="button1" theme="success">
                            Submit
                        </Button>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
};

export default AuthorLiveSession;
