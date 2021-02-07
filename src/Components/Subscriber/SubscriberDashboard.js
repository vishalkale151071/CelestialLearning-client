import React, { useState, useEffect } from 'react';
import CourseCard from '../Utils/CourseCard';
import SubscriberHeader from './SubscriberHeader';
import { Container, Row, Col } from 'shards-react';
import Axios from 'axios';

import '../styles/UserDashboard.css';

export default function SubscriberDashboard({ history }) {
    
    const [courses, setCourses] = useState([]);

    const [name, setName] = useState('');

    useEffect(() => {
        Axios.post('/subscriber/profile').then(res => {
            setName(res.data.profiledata.firstName);
        });

        Axios.get('/subscriber/myCourses').then(res => {
            console.log('Result : ', res.data.courseData);
            setCourses(res.data.courseData);
        });
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
