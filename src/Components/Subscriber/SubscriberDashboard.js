import React, { useState, useEffect } from 'react';
import CourseCard from '../Utils/CourseCard';
import SubscriberHeader from './SubscriberHeader';
import { Container, Row, Col } from 'shards-react';
import Axios from "axios";

import '../styles/UserDashboard.css';

export default function SubscriberDashboard( {history} ) {

    const [name, setName] = useState('');

    useEffect(() => {
        Axios.post('/subscriber/profile').then(res => {
            console.log("Project : " , res.data.message)
            setName(res.data.message.firstName)
        })
    }, []);
    


    return (
        <div>
            <SubscriberHeader history = {history} />
            <div className="all">
                <h1>Welcome {name}!</h1>
                    Use the Icon on the top right corner to Go to Profile/ Account Settings/ Log out!
                    <div className="main">
                <Container className="dr-example-container">
                    <Row>
                        <Col>
                            <CourseCard />
                        </Col>
                        <Col>
                            <CourseCard />
                        </Col>
                        <Col>
                            <CourseCard />
                        </Col>
                        <Col>
                            <CourseCard />
                        </Col>
                        <Col>
                            <CourseCard />
                        </Col>
                    </Row>
                </Container>
            </div>
            </div>
        </div>
    );
}
