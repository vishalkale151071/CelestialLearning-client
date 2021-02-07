import React, { useState, useEffect } from 'react';
import CourseCard from '../Utils/CourseCard';
import SubscriberHeader from './SubscriberHeader';
import { Container, Row, Col } from 'shards-react';
import Axios from 'axios';
import Swal from 'sweetalert2'

import '../styles/UserDashboard.css';

export default function SubscriberDashboard({ history }) {
    
    const [courses, setCourses] = useState([]);

    const [name, setName] = useState('');

    useEffect(() => {
        Axios.post('/subscriber/profile').then(res => {
            setName(res.data.profiledata.firstName);
        }).catch(error => {
            if(error.response.data.message == "Unauthorised."){
                history.push('/subscriber/login');
            }
            else
            {
                Swal.fire({
                    icon : 'error' ,
                    text : `${error.response.data.message}`
                })
            }
        });

        Axios.get('/subscriber/myCourses').then(res => {
            console.log('Result : ', res.data.courseData);
            setCourses(res.data.courseData);
        }).catch(error => {
            if(error.response.data.message == "Unauthorised."){
                history.push('/subscriber/login');
            }
            else
            {
                Swal.fire({
                    icon : 'error' ,
                    text : `${error.response.data.message}`
                })
            }
        });;
    }, []);

    return (
        <div>
            <SubscriberHeader history={history} />
            <div className="all">
                <h1>Welcome {name}</h1>
                Use the Icon on the top right corner to Go to Profile/ Account Settings/ Log out!
                <div className="main">
                    {courses.map(course => (
                        <Container className="cc">
                            <Row>
                                <Col>
                                    <CourseCard course={course} />
                                </Col>
                            </Row>
                        </Container>
                    ))}
                    ;
                </div>
            </div>
        </div>
    );
}
