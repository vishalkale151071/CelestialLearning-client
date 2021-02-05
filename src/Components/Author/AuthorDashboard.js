import React, { useState, useEffect } from 'react';
import CourseCard from '../Utils/CourseCard';
import AuthorHeader from './AuthorHeader';
import { Container, Row, Col } from 'shards-react';
import '../styles/UserDashboard.css';
import Axios from 'axios';

export default function AuthorDashboard() {
    const cardTitles = ['title1', 'title5', 'title4', 'title3', 'title2'];
    const [courses, setCourses] = useState([]);

    const [name, setName] = useState('');

    useEffect(() => {
        Axios.post('/author/profile').then(res => {
            setName(res.data.profiledata.firstName);
        });

        Axios.get('/homePage').then(res => {
            console.log('Result : ', res.data.courseData);
            setCourses(res.data.courseData);
        });
    }, []);

    return (
        <div>
            <AuthorHeader />
            <div className="all">
                <h1>Welcome {name}!</h1>
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
