import React, { useState, useEffect } from 'react';
import CourseCard from '../Utils/CourseCard';
import AuthorHeader from './AuthorHeader';
import Axios from 'axios';
import { Container, Row, Col } from 'shards-react';


export default function AuthorCourses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {

        Axios.get('/subscriber/myCourses').then(res => {
            console.log('Result : ', res.data.courseData);
            setCourses(res.data.courseData);
        });
    }, []);

    return (
        <div>
            <AuthorHeader />
            <h1>Author Courses</h1>
            
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
    );
}
