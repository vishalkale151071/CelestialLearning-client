import React, { useState, useEffect } from 'react';
import CourseCard from '../Utils/CourseCard';
import AuthorHeader from './AuthorHeader';
import { Container, Row, Col } from 'shards-react';
import '../styles/UserDashboard.css';
import Axios from 'axios';

export default function AuthorDashboard() {
    const cardTitles = ['title1', 'title5', 'title4', 'title3', 'title2'];

    const [name, setName] = useState('');

    useEffect(() => {
        // Axios.post('/author/profile').then(res => {
        //     console.log('Project : ', res.data.message);
        //     setName(res.data.message.firstName);
        // });
    }, []);

    return (
        <div>
            <AuthorHeader />
            <div className="all">
                <h1>Welcome {name}!</h1>
                Use the Icon on the top right corner to Go to Profile/ Account Settings/ Log out!
                <div className="main">
                    {cardTitles.map(title => (
                        <Container className="cc">
                            <Row>
                                <Col>
                                    <CourseCard title={title} />
                                </Col>
                                {/* <Col>
                            <CourseCard title="title2"/>
                        </Col>
                        <Col>
                            <CourseCard title="title3"/>
                        </Col>
                        <Col>
                            <CourseCard title="title4"/>
                        </Col>
                        <Col>
                            <CourseCard title="title5"/>
                        </Col> */}
                            </Row>
                        </Container>
                    ))}
                    ;
                </div>
            </div>
        </div>
    );
}
